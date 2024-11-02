const { userSchema, INVALID_EMAIL_MESSAGE, MIN_LENGTH_MESSAGE, MIN_LENGTH_NAME, MIN_LENGTH_PASSWORD } = require('./user.schema');

describe('User Schema', () => {
    const validUser = {
        name: 'John Doe',
        email: 'johndoe@email.com',
        password: '123456'
    }
    
    test('should be compare a valid user', async () => {
        await expect(userSchema.parseAsync(validUser)).resolves.not.toThrow()
    })

    test('should be compare a user with invalid email', async () => {
        const user = { ...validUser, email: 'johndoeemail.com' }

        await expect(userSchema.parseAsync(user)).rejects.toThrow(INVALID_EMAIL_MESSAGE)
    })

    test('should be compare a user with empty email', async () => {
        const user = { ...validUser, email: '' }

        await expect(userSchema.parseAsync(user)).rejects.toThrow(INVALID_EMAIL_MESSAGE)
    })

    test('should be compare a user with name less than 5 characters', async () => {
        const user = { ...validUser, name: 'John' }

        await expect(userSchema.parseAsync(user)).rejects.toThrow(MIN_LENGTH_MESSAGE(MIN_LENGTH_NAME))
    })

    test('should be compare a user with empty name', async () => {
        const user = { ...validUser, name: '' }

        await expect(userSchema.parseAsync(user)).rejects.toThrow(MIN_LENGTH_MESSAGE(MIN_LENGTH_NAME))
    })

    test('should be compare a user with password less than 6 characters', async () => {
        const user = { ...validUser, password: '12345' }

        await expect(userSchema.parseAsync(user)).rejects.toThrow(MIN_LENGTH_MESSAGE(MIN_LENGTH_PASSWORD))
    })

    test('should be compare a user with empty password', async () => {
        const user = { ...validUser, password: '' }

        await expect(userSchema.parseAsync(user)).rejects.toThrow(MIN_LENGTH_MESSAGE(MIN_LENGTH_PASSWORD))
    })

    test('should be compare a user without any data', async () => {
        const user = {}

        const { success, error } = await userSchema.safeParseAsync(user)

        expect(success).toBeFalsy()
        expect(error.errors.length).toBe(3)
    })
});
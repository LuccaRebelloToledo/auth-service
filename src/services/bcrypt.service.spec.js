const { generateHash, compareHash } = require("./bcrypt.service")

const password = "123456"
let generatedHash = ""

describe('BCrypt Service', () => {
    beforeAll(async () => {
        generatedHash = await generateHash(password)
    })
    
    test('should be compare the correct password', async() => {
        const result = await compareHash(generatedHash, password)
    
        expect(result).toBeTruthy()
    })
    
    test('should be compare the incorrect password', async() => {
        const incorrectPassword = "123"
    
        const result = await compareHash(generatedHash, incorrectPassword)
    
        expect(result).toBeFalsy()
    })
    
    test('should be compare the incorrect hash', async() => {
        const incorrectHash = "14312341n312vhjh12vb3h12v3hk12v31yh2vb31"
        
        const result = await compareHash(incorrectHash, password)
    
        expect(result).toBeFalsy()
    })
})
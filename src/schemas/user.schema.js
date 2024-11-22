const { z } = require('zod')

const REQUIRED_MESSAGE = (field) => `${field} é um campo obrigatório!`;
const INVALID_EMAIL_MESSAGE = 'E-mail inválido.';
const MIN_LENGTH_MESSAGE = (length) => `Deve ter no mínimo ${length} caracteres.`;
const MIN_LENGTH_NAME = 5;
const MIN_LENGTH_PASSWORD = 6;

const signUpSchema = z.object({
    name: z.string({ message: REQUIRED_MESSAGE('Name')  }).min(MIN_LENGTH_NAME, MIN_LENGTH_MESSAGE(MIN_LENGTH_NAME)),
    email: z.string({ message: REQUIRED_MESSAGE('Email') }).email(INVALID_EMAIL_MESSAGE),
    password: z.string({ message: REQUIRED_MESSAGE('Password') }).min(MIN_LENGTH_PASSWORD, MIN_LENGTH_MESSAGE(MIN_LENGTH_PASSWORD))
});

const signInSchema = z.object({
    email: z.string({ message: REQUIRED_MESSAGE('Email') }).email(INVALID_EMAIL_MESSAGE),
    password: z.string({ message: REQUIRED_MESSAGE('Password') })
});

const validateTokenSchema = z.object({
    token: z.string({ message: REQUIRED_MESSAGE('Token') })
});

module.exports = {
    signUpSchema,
    signInSchema,
    validateTokenSchema,
    REQUIRED_MESSAGE,
    INVALID_EMAIL_MESSAGE,
    MIN_LENGTH_MESSAGE,
    MIN_LENGTH_NAME,
    MIN_LENGTH_PASSWORD,
}
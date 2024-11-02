const { genSalt, hash, compare } = require('bcrypt');

const generateHash = async (password) => {
    const salt = await genSalt(10);

    return await hash(password, salt);
}

const compareHash = async (hash, password) => {
    return await compare(password, hash);
}

module.exports = {
    generateHash, compareHash
}
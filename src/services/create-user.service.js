const { User } = require('../models');

const { generateHash } = require('./bcrypt.service');
const findUserByEmail = require('./find-user-by-email.service');

const AppError = require('../shared/errors/app-error');
const AppErrorTypes = require('../shared/errors/app-error-types');
const { CONFLICT } = require('../shared/http/http-status-code')

const createUser = async (user) => {
  const { name, email, password } = user;

  const existingUserWithEmail = await findUserByEmail(user.email);

  if (existingUserWithEmail) {
    throw new AppError(AppErrorTypes.users.emailAlreadyExists, CONFLICT);
  }

  const encryptedPassword = await generateHash(password);

  const createdUser = await User.create({ name, email, password: encryptedPassword });

  createdUser.password = undefined;

  return createdUser;
}

module.exports = createUser;
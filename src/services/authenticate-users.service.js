const { sign } = require('jsonwebtoken');

const { compareHash } = require('./bcrypt.service');
const findUserByEmail = require('./find-user-by-email.service');

const AppError = require('../shared/errors/app-error');
const AppErrorTypes = require('../shared/errors/app-error-types');
const { UNAUTHORIZED } = require('../shared/http/http-status-code');

const authenticateUsers = async (userData) => {
  const { email, password } = userData;

  const user = await findUserByEmail(email);

  if (!user) {
    throw new AppError(AppErrorTypes.sessions.invalidCredentials, UNAUTHORIZED);
  }

  const passwordMatch = await compareHash(password, user.password);

  if (!passwordMatch) {
    throw new AppError(AppErrorTypes.sessions.invalidCredentials, UNAUTHORIZED);
  }

  const token = sign({}, process.env.JWT_SECRET, {
    subject: user.id.toString(),
    expiresIn: '1d'
  });

  return token;
}

module.exports = authenticateUsers;
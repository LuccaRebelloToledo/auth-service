const { decode } = require('jsonwebtoken');

const AppError = require('../shared/errors/app-error');
const AppErrorTypes = require('../shared/errors/app-error-types');
const { UNAUTHORIZED, NOT_FOUND } = require('../shared/http/http-status-code');

const validateToken = async (providedToken) => {
  try {
    if (!providedToken) {
      throw new AppError(AppErrorTypes.sessions.missingToken, NOT_FOUND);
    }

    const [, token] = providedToken.split(' ');

    const validated = decode(token, process.env.JWT_SECRET);

    if(!validated) {
      throw new AppError(AppErrorTypes.sessions.invalidToken, UNAUTHORIZED);
    }
  } catch(error) {
    throw new AppError(AppErrorTypes.sessions.invalidToken, UNAUTHORIZED);
  }
}

module.exports = validateToken;
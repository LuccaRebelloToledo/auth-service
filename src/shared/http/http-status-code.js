const { StatusCodes } = require('http-status-codes');

const CREATED = StatusCodes.CREATED;
const NO_CONTENT = StatusCodes.NO_CONTENT;
const BAD_REQUEST = StatusCodes.BAD_REQUEST;
const NOT_FOUND = StatusCodes.NOT_FOUND;
const UNAUTHORIZED = StatusCodes.UNAUTHORIZED;
const CONFLICT = StatusCodes.CONFLICT;
const INTERNAL_SERVER_ERROR = StatusCodes.INTERNAL_SERVER_ERROR;

module.exports = {
  CREATED,
  NO_CONTENT,
  BAD_REQUEST,
  NOT_FOUND,
  UNAUTHORIZED,
  CONFLICT,
  INTERNAL_SERVER_ERROR
}
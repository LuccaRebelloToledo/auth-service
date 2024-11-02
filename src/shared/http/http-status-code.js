const { StatusCodes } = require('http-status-codes');

const CREATED = StatusCodes.CREATED;
const BAD_REQUEST = StatusCodes.BAD_REQUEST;
const CONFLICT = StatusCodes.CONFLICT;
const INTERNAL_SERVER_ERROR = StatusCodes.INTERNAL_SERVER_ERROR;

module.exports = {
  CREATED,
  BAD_REQUEST,
  CONFLICT,
  INTERNAL_SERVER_ERROR
}
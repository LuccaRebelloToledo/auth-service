const AppErrorTypes = {
  users: {
    emailAlreadyExists: 'The provided email is already in use.',
  },
  sessions: {
    invalidCredentials: 'The provided credentials are invalid. Please verify your email and password.',
    missingToken: 'No token provided. Please provide a valid token.',
    invalidToken: 'The provided token is invalid. Please provide a valid token.',
  }
}

module.exports = AppErrorTypes;
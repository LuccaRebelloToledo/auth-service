const { Router } = require('express');

const { signUpSchema, signInSchema, validateTokenSchema } = require('../schemas/user.schema');

const { CREATED, NO_CONTENT } = require('../shared/http/http-status-code');

const createUser = require('../services/create-user.service')
const authenticateUsers = require('../services/authenticate-users.service');
const validateToken = require('../services/validate-token.service');

const sessionsRouter = Router();

sessionsRouter.post('/sign-up', async (req, res) => {
  const { name, email, password } = await signUpSchema.parseAsync(req.body);

  const createdUser = await createUser({ name, email, password });

  return res.status(CREATED).json(createdUser);
});

sessionsRouter.post('/sign-in', async (req, res) => {
  const { email, password } = await signInSchema.parseAsync(req.body);

  const token = await authenticateUsers({ email, password });

  return res.json({ token });
});

sessionsRouter.post('/validate-token', async (req, res) => {
  const token = req.headers.Authorization || req.headers.authorization;

  await validateToken(token);

  return res.status(NO_CONTENT).json();
});

module.exports = sessionsRouter;
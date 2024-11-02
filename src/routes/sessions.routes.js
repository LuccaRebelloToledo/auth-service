const { Router } = require('express');

const { userSchema } = require('../schemas/user.schema');

const createUser = require('../services/create-user.service')

const { CREATED } = require('../shared/http/http-status-code')

const sessionsRouter = Router();

sessionsRouter.post('/sign-up', async (req, res) => {
  const { name, email, password } = await userSchema.parseAsync(req.body);

  const createdUser = await createUser({ name, email, password });

  return res.status(CREATED).json(createdUser);
});

module.exports = sessionsRouter;
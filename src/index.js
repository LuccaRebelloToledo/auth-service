require('dotenv').config();

const express = require('express');
require('express-async-errors')

const globalErrorHandler = require('./shared/middlewares/global-error-handler.middleware');

const sessionsRouter = require('./routes/sessions.routes');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.json('Everything is fine!');
});

app.use('/sessions', sessionsRouter);

app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
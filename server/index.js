const express = require('express');
const path = require('path');
const parse = require('body-parser');

const { apiRouter } = require('./api');

const app = express();

const PORT = process.env.PORT || 8080;
const CLIENT_PATH = path.join(__dirname, '../client/dist');

app.use(express.static(CLIENT_PATH));
app.use(parse.json());
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Listening on :${PORT} 🚀`);
});
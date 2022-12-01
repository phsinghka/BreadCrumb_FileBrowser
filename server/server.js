const express = require('express');
const cors = require('cors');

const app = require('./app');

const server = express();

const PORT = process.env.PORT || 8000;

server.use(express.json());

server.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

server.use('/', app);

function startServer() {
  server.listen(PORT, () => {
    console.log(`Server is Listening on ${PORT}`);
  });
}

startServer();

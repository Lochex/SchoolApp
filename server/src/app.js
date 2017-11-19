const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config/config');
const routes = require('../routes');

const app = express();

// const router = express.Router();
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Require our routes into the application.


app.use('/api/v1', routes);
app.get('*', (req, res) => {
  res.status(200).send({
    message: 'Welcome to Clientely',
  });
});


app.listen(config.port);
console.log(`Server started on port ${config.port}`);

module.exports = app;


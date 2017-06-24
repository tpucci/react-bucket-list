const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const todosController = require('./server/controllers/todos');

// Authorize CORS
app.use(cors());

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
});

app.get('/api/todos', todosController.list);

app.listen(8080);
console.info('Server is up and running');
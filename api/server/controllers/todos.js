const Todo = require('../models').todo;

module.exports = {
  list(req, res) {
    return Todo
      .all()
      .then(todos => res.status(200).send(todos))
      .catch(error => res.status(400).send(error));
  },
};
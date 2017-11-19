const express = require('express');
const studentsController = require('../controllers').Student;

const Router = express.Router();

Router.route('/')
  .get((req, res) => res.status(200).send({
    message: 'Welcome to the Clientelys API!',
  }));

Router.route('/students')
  .get(studentsController.list)
  .post(studentsController.create);

Router.route('/students/:studentId')
  .get(studentsController.retrieve)
  .put(studentsController.update)
  .delete(studentsController.delete);

module.exports = Router;

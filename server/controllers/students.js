// import Student from '../models/student';
const { Student } = require('../models/');

module.exports = {
  create(req, res) {
    return Student
      .create({
        regno: req.body.regno,
        surname: req.body.surname,
        firstname: req.body.firstname,
        email: req.body.email
      })
      .then(student => res.status(201).send(student))
      .catch(error => res.status(400).send(error));
  },
  async list(req, res) {
    return Student
      .all()
      .then(student => res.status(200).send(student))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Student
      .findById(req.params.studentId)
      .then((student) => {
        if (!student) {
          return res.status(404).send({
            message: 'Student Not Found',
          });
        }
        return res.status(200).send(student);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Student
      .findById(req.params.studentId)
      .then((student) => {
        if (!student) {
          return res.status(404).send({
            message: 'Student Not Found',
          });
        }
        return student
          .update({
            surname: req.body.surname || student.surname,
            firstname: req.body.firstname || student.firstname,
            regno: req.body.regno || student.regno
          })
          .then(() => res.status(200).send(student))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  delete(req, res) {
    return Student
      .findById(req.params.studentId)
      .then((student) => {
        if (!student) {
          return res.status(404).send({
            message: 'Student Not Found',
          });
        }
        return student
          .destroy()
          .then(() => res.status(200).send({ message: 'Student was deleted successfully.' }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};

const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/users/:id', (req, res) => {
  User.findById(req.params.id)
      .then(data => {
          console.log(data);
          res.json(data);
      })
      .catch(error => {
          console.log(error);
      });
})

router.get('/users', (req, res) => {
  User.find({  })
      .then(data => {
          console.log(data);
          res.json(data);
      })
      .catch(error => {
          console.log(error);
      });
});

router.post('/users', (req, res) => {
  User.create(req.body)
    .then(user => {
      res.send(user)
    })
    .catch(error => {
      console.log(error);
  });
});

router.put('/users/:id', (req, res) => {
  User.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      User.findOne({_id: req.params.id})
        .then(user => {
          res.send(user);
        })
    })
});

router.delete('/users/:id', (req, res) => {
  User.findByIdAndRemove({ _id: req.params.id })
    .then(user => {
      res.send(user);
    })
})

module.exports = router;

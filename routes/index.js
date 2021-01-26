const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/users/:id', (req, res) => {
  // res.send({type: 'GET A USER'});
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

module.exports = router;

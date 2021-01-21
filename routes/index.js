const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/users', (req, res) => {
  User.find({  })
      .then((data) => {
          console.log(data);
          res.json(data);
      })
      .catch((error) => {
          console.log(error);
      });
});

router.post('/users', (req, res) => {
  const data = req.body;
  const newUser = new User(data);
  newUser.save((error) => {
      if (error) {
          res.status(500).json({ msg: 'Sorry, server errors' });
          return;
      }
      return res.json({
          msg: 'User has been saved'
      });
  });
});

module.exports = router;

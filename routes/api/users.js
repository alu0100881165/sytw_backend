const express = require('express');
const router = express.Router();

//Item model

const User = require('../../models/Users');

// @route GET user
router.get('/', (req, res) => {
  User.find()
    .then(users => res.json(users));
});

// @route POST user
router.post('/', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email
  });
  newUser.save().then(user => res.json(user));
});

module.exports = router;

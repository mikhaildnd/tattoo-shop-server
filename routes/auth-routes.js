const express = require('express');
const User = require('../models/user-model');
const handleError = require('../error-handlers/endpoint-error-handler');

const router = express.Router();

router.get('/users', (req, res) => {
  User.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(() => handleError(res, 'Что-то пошло не так'));
});

module.exports = router;

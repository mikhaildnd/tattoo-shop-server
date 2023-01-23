const User = require('../models/user-model');
const handleError = require('../error-handlers/endpoint-error-handler');

const getUsers = (req, res) => {
  User.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(() => handleError(res, 'Что-то пошло не так'));
};

module.exports = { getUsers };

const User = require('../models/user-model');
const handleError = require('../error-handlers/endpoint-error-handler');

const getUsers = (req, res) => {
  User.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => handleError(res, error));
};

module.exports = { getUsers };

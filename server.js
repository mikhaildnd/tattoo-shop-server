require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user-model');

const PORT = process.env.PORT || 3000;
const URL = `mongodb+srv://mixxmaster:1324354657q@testdb.mhzyzno.mongodb.net/?retryWrites=true&w=majority`;

const app = express();
app.use(express.json());

mongoose
  .set('strictQuery', false) //fix Mongoose deprecation warning
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log(`DB connection error: ${error}`));

app.listen(PORT, error => {
  error ? console.log(error) : console.log(`Listening port: ${PORT}`);
});

const handleError = (res, error) => {
  res.status(500).json({ error });
};

app.get('/users', (req, res) => {
  User.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(() => handleError(res, 'Что-то пошло не так'));
});

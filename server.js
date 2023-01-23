const express = require('express');
const mongoose = require('mongoose');

const PORT = 3000;
const URL = `mongodb+srv://mixxmaster:1324354657q@testdb.mhzyzno.mongodb.net/?retryWrites=true&w=majority`;

const app = express();
app.use(express.json());

mongoose
  .connect(URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log(`DB connection error: ${error}`));

app.listen(PORT, error => {
  error ? console.log(error) : console.log(`Listening port: ${PORT}`);
});

const handleError = (res, error) => {
  res.status(500).json({ error });
};

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth-routes');

const PORT = process.env.PORT || 3000;
const URL = process.env.URL;

const app = express();
app.use(express.json());
app.use(authRoutes);

mongoose
  .set('strictQuery', false) //fix Mongoose deprecation warning
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log(`DB connection error: ${error}`));

app.listen(PORT, error => {
  error ? console.log(error) : console.log(`Listening port: ${PORT}`);
});

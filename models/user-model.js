const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true }, //
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
});

// module.exports = model('User', UserSchema) //Можно еще так экспортировать

const User = model('User', UserSchema);

module.exports = User;

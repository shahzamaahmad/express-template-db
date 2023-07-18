const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt');
const guestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    default: 0,

  },
  password: {
    type: String,
  },
  phone: {
    type: String,
    required: true,
    unique: false
  },
})

// guestSchema.pre('save', function (next) {
//   var user = this;
//   var SALT_FACTOR = 5;

//   if (!user.isModified('password')) return next();

//   bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
//     if (err) return next(err);

//     bcrypt.hash(user.password, salt, null, function (err, hash) {
//       if (err) return next(err);
//       user.password = hash;
//       next();
//     });
//   });
// });

// guestSchema.methods.comparePassword = function (candidatePassword, cb) {
//   bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
//     if (err) return cb(err);
//     cb(null, isMatch);
//   });
// };

guestSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

exports.GuestModel = mongoose.model('guest', guestSchema)
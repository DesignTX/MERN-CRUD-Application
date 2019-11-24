const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  dob: {
    type: Date
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String
  }
})

module.exports = Customer = mongoose.model('customer', CustomerSchema);
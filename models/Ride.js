const mongoose = require('mongoose');

const RideSchema = new mongoose.Schema({
  driver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  passenger: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  date: {
    type: mongoose.Schema.Types.Date
  },
  status: {
    type: mongoose.Schema.Types.String
  }
});

module.exports = Ride = mongoose.model('ride', RideSchema);

const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  balance: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  about: {
    type: String
  },
  seeking_rides: {
    type: Boolean,
    required: true
  },
  offering_rides: {
    type: Boolean,
    required: true
  },
  schedule: [
    {
      monday: {
        type: String,
        required: true
      },
      tuesday: {
        type: String,
        required: true
      },
      wednesday: {
        type: String,
        required: true
      },
      thursday: {
        type: String,
        required: true
      },
      friday: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);

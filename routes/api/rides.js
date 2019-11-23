const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route   GET api/rides/previous
// @desc    Return a list of a given user's previous rides
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    // Grab all the rides containing that user's id, but only if they have the "status" property set to "complete"
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/rides
// @desc    Return a list of users offering a ride, sorted by compatibility
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const profiles = await Profile.find()
      .where('offering_rides')
      .equals(true)
      .populate('user', ['name']);

    // Implement google maps here and calculate a compatibility score, then sort the results by compatibility score
    // and return them (limit 10) in JSON format
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/rides/accept
// @desc    Return a list of users offering a ride, sorted by compatibility
// @access  Private
router.post('/accept', auth, async (req, res) => {
  try {
    // Logic to create a ride in the database will go here. We need to do a final check to make sure that the
    // schedules are still compatible, and then add a ride object to the database.
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/rides/request
// @desc    Return a list of users offering a ride, sorted by compatibility
// @access  Private
router.post('/request', auth, async (req, res) => {
  // Logic to request a ride will go here. We should expect to receive two user ids (driver and passenger),
  // as well as a day & time key/value pair. Our logic should be to send a request to the driver, which they
  // can view in their "requests" page.
  try {
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/rides
// @desc    Deletes a ride by id. This will happen if either user wishes to cancel the ride before it has happened.
// @access  Private
router.delete('/:ride_id', auth, async (req, res) => {
  try {
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

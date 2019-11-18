const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route   GET api/profile/me
// @desc    Return the current user's profile
// @access  Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      'user',
      ['name']
    );

    if (!profile) {
      return res
        .status(400)
        .json({ msg: 'There is no profile for this user.' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/profile
// @desc    Create or update user profile
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('balance', 'Balance is required.')
        .not()
        .isEmpty(),
      check('address', 'Address is required')
        .not()
        .isEmpty(),
      check('seeking_rides', 'Seeking Rides is required.')
        .not()
        .isEmpty(),
      check('offering_rides', 'Offering Rides is required.')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { balance, address, about, seeking_rides, offering_rides } = req.body;

    // Build profile objects
    const profileFields = {};
    profileFields.user = req.user.id;
    profileFields.balance = balance;
    profileFields.address = address;
    if (about) profileFields.about = about;
    profileFields.seeking_rides = seeking_rides;
    profile.offering_rides = offering_rides;

    try {
      // Try to find the profile in our database.
      let profile = await Profile.findOne({ user: req.user.id });

      // If it exists, we need to update it with what the user just provided as a request.
      if (profile) {
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }

      // If the profile does not exist, we should create it.
      profile = new Profile(profileFields);
      await Profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   GET api/profile
// @desc    Get all profiles
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['name']);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/profile/user/:user_id
// @desc    Get profile by user id
// @access  Private
router.get('/user/:user_id', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id
    }).populate('user', ['name']);

    if (!profile) return res.status(400).json({ msg: 'Profile not found.' });

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/profile/schedule
// @desc    Add or update schedule
// @access  Private
router.put(
  '/schedule',
  [
    auth,
    [
      check('monday', 'Monday is required')
        .not()
        .isEmpty(),
      check('tuesday', 'Tuesday is required')
        .not()
        .isEmpty(),
      check('wednesday', 'Wednesday is required')
        .not()
        .isEmpty(),
      check('thursday', 'Thursday is required')
        .not()
        .isEmpty(),
      check('friday', 'Friday is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { monday, tuesday, wednesday, thursday, friday } = req.body;

    const schedule = {
      monday,
      tuesday,
      wednesday,
      thursday,
      friday
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });
      profile.schedule = schedule;
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
  }
);

module.exports = router;

const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// Attempt to connect to MongoDB Atlas database
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.messsage);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;

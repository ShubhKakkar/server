const mongoose = require('mongoose');

const DB_URI = process.env.DB_URI;

const connectToDatabase = async () => {
  try {
    if (!DB_URI) {
      throw new Error("Database connection string is missing");
    }

    if (mongoose.connection.readyState === 1) {
      console.log("Already connected to the database");
      return;
    }

    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Successfully connected with the database");
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectToDatabase;

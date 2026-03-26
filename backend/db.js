const mongoose = require('mongoose');

const connectToMongo = async () => {

  try {
    await mongoose.connect(process.env.MONGOURI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Mongo connection failed:", error.message);
  }
};

module.exports = connectToMongo;

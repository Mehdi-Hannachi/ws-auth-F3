const mongoose = require("mongoose");

require("dotenv").config({ path: "./config/.env" });
const mongoURI = process.env.mongoURI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useFindAndModify: true,
      useNewUrlParser: true,
    });
    console.log("Data base connected successfully");
  } catch (error) {
    console.log("Data base connection faile", error);
  }
};

module.exports = connectDB;

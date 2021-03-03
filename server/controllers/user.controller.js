const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "./config/.env" });
const secretOrKey = process.env.secretOrKey;

exports.register = async (req, res) => {
  const { name, email, phoneNumber, password } = req.body;

  const searchResult = await User.findOne({ email });

  if (searchResult) return res.status(401).json({ msg: "User already existe" });

  try {
    const newUser = new User({
      name,
      email,
      phoneNumber,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    newUser.password = hash;

    await newUser.save();
    res.status(201).json({ msg: "User added successfully" });
  } catch (error) {
    console.log(error);
    res.status(501).json({ msg: "User add fail" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.status(400).json({ msg: "Wrong email" });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(400).json({ msg: "Wrong password" });

  try {
    const payload = {
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      id: user._id,
    };

    const token = await jwt.sign(payload, secretOrKey);

    res.status(200).json({ token: `Bearer ${token}` });
  } catch (error) {
    console.log("Login error", error);
    res.status(500).json({ msg: "Login fail" });
  }
};

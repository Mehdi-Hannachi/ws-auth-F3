const express = require("express");
const { register, login } = require("../controllers/user.controller");
const { registerRules, validator } = require("../middleware/validator");
const isAuth = require("../middleware/passport-setup");

const router = express.Router();

router.post("/register", registerRules(), validator, register);
router.post("/login", login);
router.get("/current", isAuth(), (req, res) => {
  res.json(req.user);
});

module.exports = router;

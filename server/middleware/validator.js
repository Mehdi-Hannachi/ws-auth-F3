const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  check("name", "This field is required").notEmpty(),
  check("email", "This field is required").notEmpty(),
  check("email", "This is not a valid email").isEmail(),
  check("phoneNumber", "This is not a valid phone Number").isLength({
    min: 8,
    max: 8,
  }),
  check("password", "This is not a valid password").isLength({ min: 4 }),
];

exports.validator = (req, res, next) => {
  const errors = validationResult(req);

  errors.isEmpty() ? next() : res.status(402).json({ errors: errors.array() });
};

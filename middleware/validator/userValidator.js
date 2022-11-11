const Joi = require("joi");


const userSchema = Joi.object({
  name: Joi.string().empty().min(2).required().trim().messages({
    "string.empty": "name must be required.",
    "string.min": " name should have a minimum length of 2",
    "any.required": " name must be required.",
  }),
  email: Joi.string().email().required().empty().trim().messages({
    "string.empty": "Email must be required.",
    "any.required": "Email must be required.",
    "string.email": "Invalid email address.",
  }),
  password: Joi.string().required().min(6).trim().messages({
    "string.empty": "Password must be required.",
    "string.min": "Password must be at least 6 characters",
    "any.required": "Password must be required.",
  }),
});

module.exports = userSchema;

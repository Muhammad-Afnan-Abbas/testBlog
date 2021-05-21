const mongoose = require("mongoose");

const contactScheme = {
  name: String,
  email: String,
  message: String,
  date: String,
  userId: String
};

const ContactForm = mongoose.model("contact", contactScheme);

module.exports = ContactForm;

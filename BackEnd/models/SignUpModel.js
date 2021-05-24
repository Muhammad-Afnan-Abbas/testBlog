const mongoose = require("mongoose");

const signUpSchema = {
  name: String,
  email: {
    type:String,
    required:true,
    unique:true
  },
  password: String,
  cpassword: String,
  date: String,
};

const signedUpUser = mongoose.model("signups", signUpSchema);

module.exports = signedUpUser;

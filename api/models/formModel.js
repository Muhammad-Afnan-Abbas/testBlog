const mongoose = require("mongoose");

const formSchema = {
  title: String,
  content: String,
  file: String,
}

const Form = mongoose.model("form", formSchema);

module.exports = Form;

// const Form = mongoose.model(
//   'forms',
//   new mongoose.Schema({
//     title: {
//       type: String,
//       required: true,
//     },
//     content: {
//       type: String,
//       required: true,
//     },
//   })
// );
// exports.Form = Form;
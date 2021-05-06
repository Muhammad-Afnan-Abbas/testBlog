const express = require("express");
const multer = require("multer");
var app = express();
var cors = require("cors");
const router = express.Router();
const Form = require("../models/formModel");
app.use(cors());
var upload = multer({ storage: storage });
var storage = multer.diskStorage({
  destination: `api/uploads`,
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
router.route("/create").post(upload.single("file"), async (req, res, next) => {
  console.log(req.body.title);
  const title = req.body.title;
  const content = req.body.content;
  const file = req.body.file;
  const results = req.body.results;
  const newForm = new Form({
    title,
    content,
    file,
    results,
  });
  const prom = await newForm.save();
  console.log("prom", prom);
  return prom;
  // .then((res) => console.log("this is response",res))
  //     .catch(err => console.log("Error",err));
  //next();
  // console.log(newForm)
});

router.route("/blog").get(async (request, response) => {
  const forms = await Form.find();

  try {
    response.send(forms);
    console.log("this is response of get", forms);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = router;

const express = require("express");
const multer = require('multer');
var app = express();
var cors = require('cors');
const router = express.Router();
const Form = require("../models/formModel");
app.use(cors())
var upload = multer({ storage: storage })
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, 'uploads/')
},
filename: function (req, file, cb) {
  cb(null, Date.now() + '-' +file.originalname )
}
})
router.route("/create").post(upload.single('file'),async(req, res, next) => {
  console.log(req.body)
  const title = req.body.title;
  const content = req.body.content;
  const file = req.body.file;
  const newForm = new Form ({
    title,
    content,
    file,
  });
  const prom = await newForm.save();
  console.log('prom',prom)
  return prom
  // .then((res) => console.log("this is response",res))
  //     .catch(err => console.log("Error",err));
    //next();
 // console.log(newForm)
});
module.exports= router;

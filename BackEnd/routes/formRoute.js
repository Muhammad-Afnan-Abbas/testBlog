const express = require("express");
const multer = require("multer");
var app = express();
const bcrypt = require("bcrypt");
var cors = require("cors");
var util = require('util')
const router = express.Router();
const Form = require("../models/formModel");
const ContactForm = require("../models/contactModel");
const signedUpUser = require("../models/SignUpModel");
var LocalStorage = require("node-localstorage").LocalStorage;
localStorage = new LocalStorage("./scratch");
const jwt = require("jsonwebtoken");
const JWT_SECRET =
  "BD3018B993F0EF0CE6525A1271F25CCF9B734448806B5A1B39EA65199BA351BC";
const JWT_EXPIRES = "14d";
const JWT_EXPIRATION_NUM = 14 * 1000 * 60 * 60 * 24;
NODE_ENV = "dev";

app.use(cors());
var upload = multer({ storage: storage });
var storage = multer.diskStorage({
  destination: `api/uploads`,
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const encryptPw = async (password) => {
  return await bcrypt.hash(password, 12);
};

const decryptJwt = async (token) => {
  const jwtVerify = promisify(jwt.verify);
  return await jwtVerify(token, JWT_SECRET);
};

// create valid jwt
const signJwt = (id) => {
  //console.log("Ny", id)
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES,
  });
};

// set jwt options and send jwt as a cookie
const sendToken = (user, statusCode, req, res) => {
  const token = signJwt(user._id);
  const options = {
    expires: new Date(Date.now() + JWT_EXPIRATION_NUM),
    secure: NODE_ENV === "prodution" ? true : false,
    httpOnly: NODE_ENV === "production" ? true : false,
  };
  localStorage.setItem("user", token);
  console.log(localStorage.getItem("user"));
  res.cookie("jwt", token, options);
  user.password = undefined;
  res.status(statusCode).json({
    status: "success",
    token,
    user,
  });
};

router.route("/create").post(upload.single("file"), async (req, res, next) => {
  console.log(req.body.uId);
  const title = req.body.title;
  const content = req.body.content;
  const file = req.body.file;
  const results = req.body.results;
  const username = req.body.username;
  console.log("IDD", username);
  const dateObj = new Date();
  const date = dateObj.toLocaleString("default", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  const newForm = new Form({
    title,
    content,
    file,
    results,
    date,
    username,
  });
  const prom = await newForm.save();
  res.json({ ok: true });
  return prom;
});

router.delete("/blog/:id", async (req, res) => {
  const newform = await Form.findByIdAndRemove(req.params.id);
  if (!newform)
    return res.status(404).send("The product with the given ID was not found.");
  res.send(newform);
});


router.put("/update/:id", async (req, res) => {
  console.log("edit id", req.params.id);
  Form.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true},function(err, result){
        if(err){
            console.log(err);
        }
        console.log("RESULT: " + result);
        res.send('Done')
      })
  //res.send(newform);
});

router.get("/seller/:id", async (req, res) => {
  const products = await Form.find({ username: req.params.id })
    .select("-__v")
    .sort("title");
  res.send(products);
});

router.get("/user/:id", async (req, res) => {
  console.log('hehehe',req.params.id)
  //const products = await signedUpUser.find({_id: req.params.id}).exec()
  //console.log(products)
 // res.send(products);
});

router.route("/contactUs").post(async (req, res, next) => {
  console.log(req.body.name);
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const dateObj = new Date();
  const date = dateObj.toLocaleString("default", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  const newContactForm = new ContactForm({
    name,
    email,
    message,
    date,
  });
  const prom = await newContactForm.save();
  res.json({ ok: true });
  return prom;
});

router.route("/signup").post(async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const cpassword = req.body.cpassword;
  const pw = await encryptPw(password);
  const pwc = await encryptPw(cpassword);
  const dateObj = new Date();
  const date = dateObj.toLocaleString("default", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  const signUpForm = new signedUpUser({
    name,
    email,
    password: pw,
    cpassword: pwc,
    date,
  });
  //sendToken(signUpForm, 201, req, res);
  const prom = await signUpForm.save();
  res.json({ ok: true });
  console.log("User registered");
  return prom;
});

router.route("/blog").get(async (request, response) => {
  const forms = await Form.find();
  try {
    response.send(forms);
    //console.log("this is response of get", forms);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.route("/signin").post(async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await signedUpUser.findOne({ email }).select("password");
    if (!user) return res.status(400).json({ message: "Login Failed" });
    const compared = await bcrypt.compare(password, user.password);
    compared
      ? sendToken(user, 200, req, res, user)
      : res.status(400).json({ message: "Login Failed" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

router.get("/search", async (req, res) => {
  console.log("Query", req.query.q)
  const que = req.query.q
  //const results = Form.find(word => new RegExp (`${req.query}`).test(word))
  const results = await Form.find({ title: que })
  res.send(util.inspect(results));
  console.log("res",util.inspect(results))
})

router.route("/logout").get(async (req, res) => {
  const options = {
    expires: new Date(Date.now() + 10000),
    secure: NODE_ENV === "prodution" ? true : false,
    httpOnly: NODE_ENV === "production" ? true : false,
  };
  res.cookie("jwt", "expiredtoken", options);
  res.status(200).json({ status: "success" });
});

module.exports = router;
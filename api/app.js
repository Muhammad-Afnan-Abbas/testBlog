var express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));
app.use(express.json({ limit: "50mb" }));
//connect to mongoose
const url =
  "mongodb+srv://1234:onetwo@cluster0.opdvf.mongodb.net/form?retryWrites=true&w=majority";

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });

// app.use('/uploads',express.static('../uplaods'));
app.use("/", require("./routes/formRoute"));
// app.use(bodyParser.json({
//     limit: '50mb'
//   }));
app.use("/",require("./routes/userRoute"));
app.use(
  express.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 9999999999999999,
  })
);
module.exports = app;

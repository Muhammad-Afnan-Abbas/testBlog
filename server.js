var express = require('express');
const app = express();
const cors= require("cors");
const mongoose = require('mongoose')

app.use(cors());
app.use(express.json());
//connect to mongoose
const url = "mongodb+srv://1234:onetwo@cluster0.opdvf.mongodb.net/form?retryWrites=true&w=majority";

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
//require route
// Add headers
app.use(function (req, res, next) {
app.use(express.urlencoded({ extended: false }));
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
const issue2options = {
    origin: true,
    methods: ["POST"],
    credentials: true,
    maxAge: 3600
  };
app.options("/issue-2", cors(issue2options));
app.use("/", require('./routes/formRoute'));

app.listen(3001, function (){
  console.log("express running on port 3001")
})
module.exports = app;
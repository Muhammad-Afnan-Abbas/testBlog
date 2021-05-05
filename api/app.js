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

app.use('/uploads',express.static('uplaods'));
app.use("/", require('./routes/formRoute')
);

module.exports = app;
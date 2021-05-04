const express = require('express');
const app = express();
const path = require('path');
const server = require("http").Server(app);
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

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
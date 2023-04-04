const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const router = require('./routes/book-routes');
const cors = require('cors');
require("dotenv").config();

const app = express();

app.use(bodyParser.json());

app.use(cors());

// middlewares

app.use("/books", router);

mongoose.connect(process.env.mongodb).then(() => console.log("connected to database"))
    .then(() => {
        app.listen(5000);
    }).catch((err) => console.log(err));
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const db = require("./database/connect")


require("dotenv").config({ path: "./config.env" });

const app = express()

const port = process.env.PORT

app.use(cors())

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    const err = new Error('Not Found');
    res.status(404).send('Service Not Found 404');
    err.status = 404;
    next(err);
});
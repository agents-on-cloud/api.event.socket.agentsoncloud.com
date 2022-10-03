require("dotenv").config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const apiErrorHandler = require('./exceptionHandler/apiErrorHandler');
var app = express();

const cors = require("cors");
app.use(cors())



// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

const router = require("./routers");
app.use(router);
app.use(apiErrorHandler);

module.exports = app;

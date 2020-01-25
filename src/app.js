"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const truffle_connect = require("./connection.js");
const Web3 = require("web3");
const HDWalletProvider = require("@truffle/hdwallet-provider");

require("dotenv").config({path: __dirname + '/../.env'});

const mnemonic = process.env.MNEMONIC;
const endpoint = process.env.ENDPOINT;


truffle_connect.web3 = new Web3(new HDWalletProvider(mnemonic, endpoint));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const defaultRouter = require("./routes/defaultRoutes");

app.use(defaultRouter);

// Export your express server so you can import it in the lambda function.
module.exports = app;

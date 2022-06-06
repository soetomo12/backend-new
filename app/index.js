/**
 * @file Bootstrap express.js server
 * @author Fikri Rahmat Nurhidayat
 */

const express = require("express");
const morgan = require("morgan");
const router = require("../config/routes");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());

/** Install request logger */
app.use(morgan("dev"));

/** Install JSON request parser */
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

/** Install Router */
app.use(router);

module.exports = app;

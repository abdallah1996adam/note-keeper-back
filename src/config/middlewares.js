const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const middleWares = {
  apiLogger: morgan("dev"),
  urlIncoded: express.urlencoded({ extended: true }),
  json: express.json(),
  secureSharing: cors(),
  protect: helmet(),
};

module.exports = middleWares;

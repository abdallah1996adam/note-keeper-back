const express = require("express");

const config = require("./config/env");
const Server = require("./config/server");
const middleWares = require("./config/middlewares");
const routes = require("./modules");

const api = Server(express, middleWares, routes);

const start = async () => {
  try {
    await api.listen(config.app_port);
  } catch (error) {
    console.log(error);
  }
};
start();

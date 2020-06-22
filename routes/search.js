'use strict'

const Router = require('restify-router').Router;
var routerInstance = new Router();

routerInstance.post("/all",(req, res) => {
  //search in db
});

routerInstance.post("/search",(req, res) => {
  //search in db
});

module.exports = routerInstance

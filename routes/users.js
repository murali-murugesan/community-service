'use strict'

const Router = require('restify-router').Router;
const routerInstance = new Router();
const https = require('https');
const {data} = require('../config/default');
const userService = require('../services/users');

routerInstance.post("/signup", (req, res) => {
  userService.signup(req.body);
  res.send('User created successfully');
});

routerInstance.post("/username", (req, res) => {
  //verify in db username exists
});

routerInstance.post("/forgot", (req, res) => {

});

routerInstance.get("/userType", (req, res) => {
  https.get(data.url + '/userType', (resp) => {
    resp.on('data', (result) => {
      res.send(JSON.parse(result));
    });
  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
  });
});

module.exports = routerInstance

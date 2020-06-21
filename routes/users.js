const Router = require('restify-router').Router;
const routerInstance = new Router();
const https = require('https');
const config = require('../config/default');

routerInstance.post("/signup", (req, res) => {
  let userDetails = req.body;
  res.send(userDetails);
});

routerInstance.post("/username",(req, res) => {
  //verify in db username exists
});

routerInstance.post("/forgot",(req, res) => {

});

routerInstance.post("/reset",(req, res) => {

});

routerInstance.get("/userType", (req, res) => {
  https.get(config.url + '/userType', (resp) => {
    resp.on('data', (data) => {
      res.send(JSON.parse(data));
    });
  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
  });
});

module.exports = routerInstance

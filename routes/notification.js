const Router = require('restify-router').Router;
var routerInstance = new Router();

routerInstance.get("/notification-types",(req, res) => {
  //search in db
});

module.exports = routerInstance

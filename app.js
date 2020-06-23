'use strict'

const restify = require('restify');
const bodyParser = require('body-parser');
const _ = require('lodash');

const {service} = require('./config/default');

const server = restify.createServer({
  name: service.name,
  version: 1.0
});

server.use(bodyParser.json());

//loading available modules enabled
_.forEach(service.modules, function(module) {
  console.log('Loading %s module .....', module);
  require(`./routes/${module}`).applyRoutes(server, service.contextPath);
});

if (!service.modules) {
  console.log('No Modules found ....')
}

server.listen(service.port, function() {
  console.log('%s listening at %s', server.name, server.url + service.contextPath);
});

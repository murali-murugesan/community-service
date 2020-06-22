'use strict'

const restify = require('restify');
const bodyParser = require('body-parser');
const _ = require('lodash');

const config = require('./config/default');

const server = restify.createServer({
  name: config.service.name,
  version: 1.0
});

server.use(bodyParser.json());

//loading available modules enabled
_.forEach(config.service.modules, function(module) {
  console.log('Loading %s module .....', module);
  require(`./routes/${module}`).applyRoutes(server, config.service.contextPath);
});

if (!config.service.modules) {
  console.log('No Modules found ....')
}

server.listen(config.service.port, function() {
  console.log('%s listening at %s', server.name, server.url + config.service.contextPath);
});

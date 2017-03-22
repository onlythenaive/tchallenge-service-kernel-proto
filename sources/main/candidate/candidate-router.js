(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    apply: function (server, routePrefix) {
      server.use(routePrefix + it.path, it.router);
    }
  };

  it.path = '/candidates';

  it.router = imports.express.Router()

      .get('/', function (request, response) {
        response.json(imports.service.getAll());
      })

      .get('/:candidateId', function (request, response) {
        response.json(imports.service.getById(request.params.candidateId));
      })

      .post('/', function (request, response) {
        response.json(imports.service.create(request.body));
      });
})({

  express: require('express'),

  service: require('./candidate-service')
});

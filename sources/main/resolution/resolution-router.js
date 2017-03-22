(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    apply: function (server, routePrefix) {
      server.use(routePrefix + it.path, it.router);
    }
  };

  it.path = '/resolutions';

  it.router = imports.express.Router()

      .get('/', function (request, response) {
        response.json(imports.resolutionService.getAll());
      })

      .get('/:id', function (request, response) {
        response.json(imports.resolutionService.getById(request.params.id));
      })

      .post('/', function (request, response) {
        response.json(imports.resolutionService.create(request.body));
      });
})({

  express: require('express'),

  resolutionService: require('./resolution-service')
});

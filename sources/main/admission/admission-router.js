(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    apply: function (server, routePrefix) {
      server.use(routePrefix + it.path, it.router);
    }
  };

  it.path = '/admissions';

  it.router = imports.express.Router()

      .get('/', function (request, response) {
        response.json(imports.admissionService.getAll());
      })

      .get('/:id', function (request, response) {
        response.json(imports.admissionService.getById(request.params.id));
      })

      .post('/', function (request, response) {
        response.json(imports.admissionService.create(request.body));
      });
})({

  express: require('express'),

  admissionService: require('./admission-service')
});

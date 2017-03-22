(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    apply: function (server, routePrefix) {
      server.use(routePrefix + it.path, it.router);
    }
  };

  it.path = '/tasks';

  it.router = imports.express.Router()

      .get('/', function (request, response) {
        response.json(imports.workbookService.getAll());
      })

      .get('/:id', function (request, response) {
        response.json(imports.workbookService.getById(request.params.id));
      })

      .post('/', function (request, response) {
        response.json(imports.workbookService.create(request.body));
      });
})({

  express: require('express'),

  workbookService: require('./task-service')
});

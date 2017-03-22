(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    apply: function (server, routePrefix) {
      server.use(routePrefix + it.path, it.router);
    }
  };

  it.path = '/workbooks';

  it.router = imports.express.Router()

      .get('/', function (request, response) {
        response.json(imports.workbookService.getAll());
      })

      .get('/:id', function (request, response) {
        response.json(imports.workbookService.getById(request.params.id));
      })

      .post('/', function (request, response) {
        response.json(imports.workbookService.create(request.body));
      })

      .post('/:id/declination', function (request, response) {
        response.json(imports.workbookService.decline(request.params.id));
      })

      .post('/:id/submission', function (request, response) {
        response.json(imports.workbookService.submit(request.params.id));
      })

      .post('/:id/feedback', function (request, response) {
        response.json(imports.workbookService.feedback(request.params.id));
      })

      .post('/:id/essay', function (request, response) {
        response.json(imports.workbookService.essay(request.params.id));
      });
})({

  express: require('express'),

  workbookService: require('./workbook-service')
});

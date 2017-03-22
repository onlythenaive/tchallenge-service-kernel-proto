(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    apply: function (server, routePrefix) {
      server.use(routePrefix + it.path, it.router);
    }
  };

  it.path = '/forums';

  it.router = imports.express.Router()

      .get('/', function (request, response) {
        response.json(imports.forumService.getAll());
      })

      .get('/:textcode', function (request, response) {
        response.json(imports.forumService.getByTextcode(request.params.textcode));
      })

      .post('/', function (request, response) {
        response.json(imports.forumService.create(request.body));
      });
})({

  express: require('express'),

  forumService: require('./forum-service')
});

(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    apply: function (server, routePrefix) {
      server.use(routePrefix + it.path, it.router);
    }
  };

  it.path = '/workbooks';

  it.router = imports.express.Router();
})({

  express: require('express'),

  workbookService: require('../workbook/workbook-service')
});

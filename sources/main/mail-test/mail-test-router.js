(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    apply: function (server, routePrefix) {
      server.use(routePrefix + it.path, it.router);
    }
  };

  it.path = '/mailTest';

  it.router = imports.express.Router()

      .get('/:message', function (request, response) {
        imports.mailService.send({
          text: request.params.message, 
          from: "username@your-email.com", 
          to: "ilya.gubarev@gmail.com",
          subject: "testing emailjs"
        }, function (data) {
          response.json(data);
        });
      });
})({

  express: require('express'),

  mailService: require('../utility/mail-service')
});

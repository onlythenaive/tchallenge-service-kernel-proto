(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    send: function (properties, handler) {
      it.server.send(properties, function (error, info) {
          if (error) {
            handler(error);
          } else {
            handler(info);
          }
      });
    }
  };

  it.server = imports.email.server.connect({
    user: 'ilya.gubarev@gmail.com',
    password: '*',
    host: "smtp.gmail.com", 
    ssl: true
  });
})({

  email: require('emailjs/email'),
});

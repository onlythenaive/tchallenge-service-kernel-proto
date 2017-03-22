(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    create: function (properties) {
      return imports.repository.create(properties);
    },

    getAll: function () {
      return imports.repository.findAll();
    },

    getById: function (id) {
      return imports.repository.findById(id);
    },

    getByEmail: function (email) {
      return imports.repository.findByEmail(email);
    }
  };
})({

  repository: require('./candidate-repository')
});

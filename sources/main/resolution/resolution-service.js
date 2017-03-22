(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    create: function (properties) {
      properties.permanentToken = imports.uuid();
      return imports.resolutionRepository.create(properties);
    },

    getAll: function () {
      return imports.resolutionRepository.findAll();
    },

    getById: function (id) {
      return imports.resolutionRepository.findById(id);
    }
  };
})({

  uuid: require('uuid/v4'),

  resolutionRepository: require('./resolution-repository')
});

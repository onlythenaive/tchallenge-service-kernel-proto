(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    create: function (properties) {
      var admission = imports.admissionRepository.create(properties);
      var resoliton = imports.resolutionService.create({admissionId: admission.id});
      admission.resolutionId = resoliton.id;
      return imports.admissionRepository.update(admission);
    },

    getAll: function () {
      return imports.admissionRepository.findAll();
    },

    getById: function (id) {
      return imports.admissionRepository.findById(id);
    }
  };
})({

  resolutionService: require('../resolution/resolution-service'),

  admissionRepository: require('./admission-repository')
});

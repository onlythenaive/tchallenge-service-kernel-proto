(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    create: function (properties) {
      return imports.workbookRepository.save(properties);
    },

    getAll: function () {
      return imports.workbookRepository.findAll();
    },

    getById: function (id) {
      return imports.workbookRepository.findById(id);
    }
  };
})({

  workbookRepository: require('./task-repository'),
});

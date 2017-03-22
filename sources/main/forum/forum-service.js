(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    create: function (properties) {
      properties.status = 'CREATED';
      return imports.forumRepository.save(properties);
    },

    getAll: function () {
      return imports.forumRepository.findAll();
    },

    getById: function (id) {
      return imports.forumRepository.findById(id);
    },

    getByTextcode: function (textcode) {
      return imports.forumRepository.findByTextcode(textcode);
    }
  };
})({

  forumRepository: require('./forum-repository')
});

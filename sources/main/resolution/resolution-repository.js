(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    create: function (entity) {
      entity.id = imports.uuid();
      entity.createdAt = Date.now();
      return it.collection.insertOne(entity);
    },

    findAll: function () {
      return it.collection.find({});
    },

    findById: function (id) {
      return it.collection.findOne({id: id});
    }
  };

  it.collectionName = 'resolutions';

  it.collection = imports.database.collection(it.collectionName);
})({

  uuid: require('uuid/v4'),

  database: require('../utility/database')
});

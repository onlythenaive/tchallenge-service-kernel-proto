(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    create: function (entity) {
      entity.id = imports.uuid();
      entity.createdAt = Date.now();
      return it.collection.insertOne(entity);
    },

    update: function (entity) {
      return it.collection.update(entity);
    },

    findAll: function () {
      return it.collection.find({});
    },

    findById: function (id) {
      return it.collection.findOne({id: id});
    }
  };

  it.collectionName = 'admissions';

  it.collection = imports.database.collection(it.collectionName);
})({

  uuid: require('uuid/v4'),

  database: require('../utility/database')
});

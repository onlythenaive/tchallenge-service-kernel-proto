(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    findAll: function () {
      return it.collection.find({});
    },

    findById: function (id) {
      return it.collection.findOne({id: id});
    },

    save: function (entity) {
      if (entity.id) {
        return it.collection.update(entity);
      } else {
        entity.id = it.idSequence++ + '';
        entity.createdAt = Date.now();
        return it.collection.insertOne(entity);
      }
    }
  };

  it.idSequence = 1;

  it.collectionName = 'workbooks';

  it.collection = imports.database.collection(it.collectionName);
})({

  uuid: require('uuid/v4'),

  database: require('../utility/database')
});

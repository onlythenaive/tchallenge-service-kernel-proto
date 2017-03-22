(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    run: function () {
      it.bootstrapEntities.forEach(function (entity) {
        it.entities.insertOne(entity);
      });
    }
  };

  it.collectionName = 'permanentTokens';

  it.bootstrapEntities = [
    {
      id: imports.uuid(),
      candidateId: "SOME-CANDIDATE-ID"
    }
  ];

  it.entities = imports.database.collection(it.collectionName);
})({

  uuid: require('uuid/v4'),

  database: require('../utility/database')
});

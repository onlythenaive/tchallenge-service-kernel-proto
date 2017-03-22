(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    run: function () {
      it.bootstrapData.forEach(function (properties) {
        imports.workbookService.create({});
      });
    }
  };

  it.bootstrapData = [
  {}, {}
  ];
})({

  workbookService: require('./workbook-service')
});

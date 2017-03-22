(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    create: function (properties) {
//      properties.id = null;
      properties.status = 'CREATED';
      properties.assignments = [];
      var tasks = imports.taskRepository.findAll();
      for (var i = 0; i < tasks.length; i++) {
        properties.assignments.push({
          lineup: i + 1,
          task: tasks[i]
        });
      }
      return imports.workbookRepository.save(properties);
    },

    getAll: function () {
      return imports.workbookRepository.findAll();
    },

    getById: function (id) {
      return imports.workbookRepository.findById(id);
    },

    decline: function (id) {
      console.log(id);
      var workbook = imports.workbookRepository.findById(id);
      workbook.status = "DECLINED";
      return imports.workbookRepository.save(workbook);
    },

    submit: function (id) {
      console.log(id);
      var workbook = imports.workbookRepository.findById(id);
      workbook.status = "SUBMITTED";
      return imports.workbookRepository.save(workbook);
    }
  };
})({

  taskRepository: require('../task/task-repository'),
  workbookRepository: require('./workbook-repository')
});

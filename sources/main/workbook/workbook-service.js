(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    create: function (properties) {
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
      var workbook = imports.workbookRepository.findById(id);
      workbook.status = "DECLINED";
      return imports.workbookRepository.save(workbook);
    },

    submit: function (id) {
      var workbook = imports.workbookRepository.findById(id);
      workbook.status = "SUBMITTED";
      workbook.assessment= {
        percentage: 100.0
      };
      return imports.workbookRepository.save(workbook);
    },

    feedback: function (id) {
      var workbook = imports.workbookRepository.findById(id);
      workbook.feedback = {
        
      };
      return imports.workbookRepository.save(workbook);
    },

    essay: function (id) {
      var workbook = imports.workbookRepository.findById(id);
      workbook.essay = {
        
      };
      return imports.workbookRepository.save(workbook);
    }
  };
})({

  taskRepository: require('../task/task-repository'),
  workbookRepository: require('./workbook-repository')
});

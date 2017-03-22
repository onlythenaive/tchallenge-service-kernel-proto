(function ($) {

  var server = $.express();

  var indexViewPath = $.path.resolve($.basePath, '../../frontend/main', 'index.html');
  var staticAssetPath = $.path.resolve($.basePath, '../../frontend/main');

  server.use($.cors());
  server.use($.bodyParser.json());

  $.bootstraps.forEach(function (bootstrap) {
    bootstrap.run();
  });

  $.routers.forEach(function (router) {
    router.apply(server, '/data');
  });

  server

      .use('/static', $.express.static(staticAssetPath))

      .get('/data/workbooks/:workbookId', function (request, response) {
        response.json({
          id: request.params.workbookId,
          status: 'CREATED',
          assignments: [
            {
              id: 'assignment-1',
              lineup: 1,
              workbookId: '1',
              task: {
                id: '1',
                title: 'Title',
                introduction: 'introduction',
                question: 'question'
              }
            }
          ]
        });
      })

      .get('/data/forums/:forumId', function (request, response) {
        response.json({
          id: request.params.forumId,
          status: "APPROVED",
          title: "Joker 2016"
        });
      })

      .get('/data/forums/admissions/:admissionId', function (request, response) {
        response.json({
          id: request.params.admissionId,
          status: "CREATED"
        });
      })

      .get('/*', function (request, response) {
        response.sendFile(indexViewPath);
      })

      .listen (3000);
})({

  basePath: __dirname,

  bodyParser: require('body-parser'),
  cors: require('cors'),
  express: require('express'),
  path: require('path'),

  bootstraps: [
    require('./forum/forum-bootstrap.js'),
    require('./admission/admission-bootstrap.js'),
    require('./resolution/resolution-bootstrap.js'),
    require('./candidate/candidate-bootstrap.js'),
    require('./permanent-token/permanent-token-bootstrap.js'),
    require('./forum/forum-bootstrap.js'),
    require('./task/task-bootstrap.js'),
    require('./workbook/workbook-bootstrap.js')
  ],

  routers: [
    require('./forum/forum-router.js'),
    require('./admission/admission-router.js'),
    require('./resolution/resolution-router.js'),
    require('./candidate/candidate-router.js'),
    require('./forum/forum-router.js'),
    require('./task/task-router.js'),
    require('./workbook/workbook-router.js'),
    require('./workbook-declination/workbook-declination-router.js'),
    require('./workbook-submission/workbook-submission-router.js'),
    require('./mail-test/mail-test-router.js')
  ]
});

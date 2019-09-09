
console.log('Starting API container');
const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const requestId = require('./middleware/requestId');
const config = require('./config');
const app = express();
const models = require('./models');

app.enable('trust proxy');
app.use(parser.json({limit: '50mb'}));
app.use(parser.urlencoded({limit: '50mb', extended: true}));
app.use(cors({exposedHeaders: ['Location']}));
app.use(requestId);
app.use('/', routes);
app.use(function (err, req, res, next) {
  if (err.stack) {
    return res.status(500).json({success: false, message: err.message, stack: err.stack})
  }
  return res.status(err.code).json(err);
});
app.listen(config.app.port, function () {
    console.log('API container started on port ' + config.app.port);
});

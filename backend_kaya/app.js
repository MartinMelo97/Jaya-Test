require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
var cors           = require('cors');
const logger       = require('morgan');
const path         = require('path');


const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const allowedOrigins = ['http://localhost:3001']
app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true)

    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not' + 'allow access from the specified Origin.'
      return callback(new Error(msg), false)
    }

    return callback(null, true)
  }
}))

// default value for title local
app.locals.title = 'Prueba técnica Jaya';

const index = require('./routes/index');
app.use('/', index);


module.exports = app;

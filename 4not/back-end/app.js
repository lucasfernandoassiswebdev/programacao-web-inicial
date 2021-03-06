var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const indexRouter = require('./routes/index');
const artigoRouter = require('./routes/artigo');
const tipoRouter = require('./routes/tipo');
const linhaRouter = require('./routes/linha');
const tamanhoRouter = require('./routes/tamanho');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const db = require('./config/database');
db('mongodb://localhost:27017/brecho-not');

app.use('/', indexRouter);
app.use('/artigo', artigoRouter);
app.use('/tipo', tipoRouter);
app.use('/linha', linhaRouter);
app.use('/tamanho', tamanhoRouter);

module.exports = app;

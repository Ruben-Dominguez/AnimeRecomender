var createError = require('http-errors');
var express = require('express');
var path = require('path');
const http = require('http');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Scraper = require('images-scraper');
var ejs = require('ejs');

var indexRouter = require('./routes/index');
var searchRouter = require('./routes/index');

var app = express();
const server = http.createServer(app);

// view engine setupx|
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, './public')));

app.use('/', indexRouter);
app.use('/search', searchRouter);



/*
const google = new Scraper({
    puppeteer: {
    headless: false,
},
});

(async () => {
const results = await google.scrape('Trigun', 1);
console.log('results', results);
})();
*/

module.exports = app;

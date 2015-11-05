var express = require('express');
var load = require('express-load');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var bodyParser = require('body-parser');
var app = express();

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.use(cookieParser('ntalk'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(expressSession({
	secret: 'sbrubles',
    name: 'ntalk',
//    store: sessionStore, // connect-mongo session store
    proxy: true,
    resave: true,
    saveUninitialized: true
}));
app.use(express.static(__dirname + 'public'));

load('models').then('controllers').then('routes').into(app);

app.listen(3000, function() {
  console.log("Nodetalk no ar.");
});
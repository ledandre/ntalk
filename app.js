var express = require('express');
var load = require('express-load');
var app = express();

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(__dirname + 'public'));

load('models').then('controllers').then('routes').into(app);

app.listen(3000, function() {
  console.log("Nodetalk no ar.");
});
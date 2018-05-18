const express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/beltexam');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public/dist/public')));
app.set('views', path.join(__dirname, './views'));
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.listen(8000, function(){
    console.log('listening on port 8000');
})
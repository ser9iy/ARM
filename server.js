var express = require('express'),
authentication = require('express-authentication'),
  app = express(),
  path = require('path')
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/apiModels'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:332244ser@ds159591.mlab.com:59591/armlist'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


var routes = require('./api/routes/apiRoutes');

routes(app);



app.listen(port);


console.log('todo list RESTful API server started on: ' + port);

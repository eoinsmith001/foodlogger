var express = require('express'),
  bodyParser = require('body-parser'),
  serveStatic = require('serve-static'),
  mongoose = require('mongoose'),
  cors = require('cors');
var MealEntry = require('./app/models/MealEntry');
var app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined"));
var apiRouter = express.Router();
apiRouter.route('/')
  .get(function(req,res) {
    res.status(200).json({
      success: true,
      message: 'Welcome to the API'
    });
  });
app.use(serveStatic(__dirname+'/public'));
app.use('/api',apiRouter);
app.listen(port, function() {
  console.log('App running on port ', port);
});

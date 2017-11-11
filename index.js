const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const app = express();


app.use(express.static('./public'));

//connect to db
mongoose.connect('mongodb://localhost/studentsdb');

mongoose.Promise = global.Promise;

// app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

//set up routes
app.use('/api', require('./routes/api'));


app.use(function(err, req, res, next){

    res.status(422).send({err: err.message});
    // console.log(err);

});

//initialise the server to port 3000
app.listen(3000, function(){

    console.log('We are rocking on port 3000')
});
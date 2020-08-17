const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Driver = require('./models/driverdetail');

//Connect to MongoDB

mongoose.connect('mongodb://localhost/driverdetails');
const db= mongoose.connection;

app.get('/', function(req,res){
    res.send('Hello World!!');
});

//Routes
app.get('/api/driverDetail', function(req,res){
    Driver.getdriverDetail(function(err,driver){
        if(err){
            throw err;
        }
        res.json(driver);
    });
});

//
app.get('/api/driverDetail/:_id', function(req,res){
    Driver.getdriverDetailById(req.params._id,function(err,driver){
        if(err){
            throw err;
        }
        res.json(driver);
    });
});

app.post('/api/driverDetail', function(req,res){
    let driver = req.body;
    Driver.addDriver(driver,function(err,driver){
        if(err){
            throw err;
        }
        res.json(driver);
    });
});

app.listen(3000);
console.log('Running on Port 3000...');

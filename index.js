const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
Driver = require('./models/driverdetail');

//Connect to MongoDB

mongoose.connect('mongodb://localhost/driverdetails');
const db= mongoose.connection;

app.get('/', function(req,res){
    console.log(req.query.name);
    res.send('Hello World!!');
});

//Routes
app.get('/api/driverDetail', function(req,res){
    console.log(req.query.driverName);
    Driver.getdriverDetail(function(err,driver){
        if(err){
            throw err;
        }
        res.json(driver);
    });
});

//
app.get('/api/getDriverDetails', function(req,res){
    let id=req.query.id
    Driver.getdriverDetailById(id,function(err,driver){
        if(err){
            throw err;
        }
        res.json(driver);
    });
});

app.post('/api/addDriver', function(req,res){
    let driver = req.body;
    Driver.addDriver(driver,function(err,driver){
        if(err){
            throw err;
        }
        res.json(driver);
    });
});

app.listen(3003);
console.log('Running on Port 3003...');

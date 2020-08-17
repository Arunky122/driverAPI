const mongoose = require('mongoose');
const driverSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    },
    distanceTravelled:{
        type:String,
        required:true
    },
    create_date:{
        type:Date,
        default:Date.now
    }
});

const Driver = module.exports= mongoose.model('Driver', driverSchema);

// Get driver details

module.exports.getdriverDetail = function(callback,limit){
    Driver.find(callback).limit(limit);
}
//get single driver detail
module.exports.getdriverDetailById = function(id,callback){
    Driver.findById(id,callback);
}

//Add Driver Detail
module.exports.addDriver = function(driver,callback){
    Driver.create(driver,callback);
}

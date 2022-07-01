const mongoose = require("mongoose");

// var mongoURL = 'mongodb+srv://system:mongo1234@cluster0.r7jye.mongodb.net/dbms-project'
var mongoURL = 'mongodb+srv://system:mongo1234@cluster0.r7jye.mongodb.net/the_store'

mongoose.connect(mongoURL ,{useUnifiedTopology : true, useNewUrlParser:true})

var db = mongoose.connection

db.on('connected',()=>{
    console.log(`We're Handy`);

})

db.on('error' , ()=>{
    console.log(`MongoDB connection Failed`)
})

module.exports = mongoose 
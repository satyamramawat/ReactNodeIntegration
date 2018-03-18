var express = require("express");
var path = require("path");
var mongo = require("mongoose"); 
var bodyParser = require('body-parser'); 
var morgan = require("morgan");
var db = require("./config.js");

var app = express();
var port = process.env.port || 7777;
var srcpath  =path.join(__dirname,'/public') ;
app.use(express.static('public'));
app.use(bodyParser.json({limit:'5mb'}));  
app.use(bodyParser.urlencoded({extended:true, limit:'5mb'}));


var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var personSchema = new Schema({
    aadhaar:{type: String},
    firstname:{type: String},
    lastname:{type: String},  
    email: { type: String },  
    gender: { type: String   },  
    pincode:{type: String},
    area:{type: String},
    district:{type: String},
    dob:{type: Date},
    village:{type: String},
    city:{type: String},
    state:{type: String},
    mobileno:{type: String},   
    username:{type: String},
    password:{type: String},   
            
},{ versionKey: false });
 

var model = mongoose.model('person', personSchema, 'person');


//api for Insert data from database   CREATE
app.post("/api/savedata",function(req,res){

    var mod = new model(req.body);
        mod.save(function(err,data){
            if(err){
                res.send(err);              
            }
            else{      
                 res.send({data:"Record has been Inserted..!!"});
                 console.log("Record has been inserted");
            }
        }); 
})


    
// call by default index.html page
app.get("*",function(req,res){ 
    res.sendFile(srcpath +'/index.html');
})

//server stat on given port
app.listen(port,function(){ 
    console.log("server start on port"+ port);
})
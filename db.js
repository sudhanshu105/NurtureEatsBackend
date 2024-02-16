const mongoose = require('mongoose');
require("dotenv").config({ path: "./config.env" });

const conecttomongo = () =>{
    try{
    const mongoURI = process.env.Database_Url.replace('<password>' , process.env.Database_pass);
    mongoose.connect(mongoURI , ()=>{
        console.log("Connected to mongo successfully");
    })
}catch(err){
    console.log("Error in connecting to database");
}
}

module.exports = conecttomongo;
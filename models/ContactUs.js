const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Feedback = new Schema(
  {
    name:{
        type : String,
        required : true,
    },
    email:{
        type : String,
        required : true,
    },
    number:{
        type : String,
        required : true,
    },
    city:{
        type : String,
        required : true,
    },
    feedback:{
        type : String,
        default : "None"
    },
    Date:{
        type : Date,
        default : Date.now()
    }
  }
);

const FEEDBACK = mongoose.model("feedback", Feedback);
FEEDBACK.createIndexes();
module.exports = FEEDBACK;
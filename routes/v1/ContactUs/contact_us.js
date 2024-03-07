const express = require('express');
const router = express.Router();
// const ContactUs = require('../../../models/ContactUs');
// const{body,validationResult} = require('express-validator');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const fetchuser = require('../../../middleware/fetchuser');


// router.post('/' , async(req , res)=>{
//     console.log("Reb Body : " , req.body);
//     res.send("Done");
// });


router.get('/' , (req,res)=>{
    res.send("Working Fine...");
})

module.exports = router;
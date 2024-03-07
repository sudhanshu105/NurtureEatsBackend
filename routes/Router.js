const express = require('express');
const router = express.Router();

const ContactUs = require('../models/ContactUs');

const auth =  require('./v1/Auth/auth');
const photos = require('./v1/Photos/photos');

router.post('/contact_us' , async(req , res)=>{
    console.log("Contact US : " , req.body.user);
    const User = req.body.user;
    const newfeedback = new ContactUs({
        name : User.name,
        email : User.email,
        number : User.mobileNumber,
        city : User.city,
        feedback : User.feedback 
    })
    await newfeedback.save();
    res.send("Done");
});


router.post('/auth' , auth);
// router.post('/contact_us' , contact_us);
router.post('/photos' , photos);
router.get('/router_check' , (req,res)=>{
    res.send("Working Fine...");
})

module.exports = router;
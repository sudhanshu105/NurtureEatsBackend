const express = require('express');
const router = express.Router();

const auth =  require('./v1/Auth/auth');
const photos = require('./v1/Photos/photos');

router.post('/auth' , auth);
router.post('/photos' , photos);
router.get('/router_check' , (req,res)=>{
    res.send("Working Fine...");
})

module.exports = router;
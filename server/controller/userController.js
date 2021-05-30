const express = require('express');
var router = express.Router();
var objectId = require('mongoose').Types.ObjectId;
var {User}=require('./../models/users');

router.get('/',(req,res) => {
 User.find((err,docs) => {
     if(!err)
     {
         res.send(docs);
     }
     else
     {
         console.log(err);
     }
 });
});

router.get('/:id', (req, res) => {
    if (!objectId.isValid(req.params.id)) {
        return res.status(400).send('No records found at:', `${req.params.id}`);
    }
    User.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        }
        else {
            console.log(err);
        }
    });

});


router.post('/', (req, res) => {
    var user = new User({
        pincode: req.body.pincode,
        emailid: req.body.emailid
    });
    user.save((err, doc) => {
        if (!err) {
            res.send(doc);
        }
        else {
            console.log(err);
        }
    });
});

module.exports=router;
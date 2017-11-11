const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');

var Students = require('../models/students');



router.get('/students', function(req, res, next){

    Students.find().then(function(student){

        res.send(student)

    }).catch(next);
});

router.post('/students', function(req, res, next){

    Students.create(req.body).then(function(student){
        res.send(student);
    }).catch(next);

});

router.put('/students/:id', function(req, res, next){

    Students.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(student){

        Students.findOne({_id: req.params.id}).then(function(student){

            res.send(student); 

        });

    }).catch(next);

});

router.delete('/students/:id', function(req, res, next){

    Students.findByIdAndRemove({_id: req.params.id}).then(function(student){
        res.send(student);
    }).catch(next);

});

module.exports = router;

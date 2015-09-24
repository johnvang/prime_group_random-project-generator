/**
 * Created by Nick on 9/23/15.
 */
var express = require('express');
var router = express.Router();
var path = require('path');
var getName = require('../helpers/getName');
var getSkill = require('../helpers/getSkill');


console.log('inside index.js');

router.get('/team',function(req,res){
    var teamMember = {name:"", skillset:"", points:0};
    teamMember.name = getName();
    teamMember.skillset = getSkill();
    res.send(JSON.stringify(teamMember));
    console.log(teamMember.name);
})


router.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../public/views/index.html'))
});


module.exports = router;
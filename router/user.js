const { Router } = require('express');
const express = require('express')
const route = express.Router();
const mongoose = require('mongoose')
const requireloginmid = require('../middleware/requirelogin')
const Post = mongoose.model('Post')
const User = mongoose.model('User')

route.get('/user/:id',(req,res)=>
{
    User.findOne({_id:req.params.id})
    .select("-password")
    .then(user=>
        {
            Post.find({PostedBy:req.params.id})
            .populate("PostedBy","_id name")
            .exec((err,posts)=>
            {
                if(err)
                return res.status(422).json({error:err})
                res.json({user,posts})
            })
            
        })
        .catch(err=>
            {
                return res.status(422).json({error:"User not found"})
            })
})

module.exports = route
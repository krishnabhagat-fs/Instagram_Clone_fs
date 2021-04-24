const express = require('express')
const route = express.Router();
const mongoose = require('mongoose')
const requireloginmid = require('../middleware/requirelogin')
const Post = mongoose.model('Post')

route.post('/mypost',requireloginmid,(req,res)=>
{
    //console.log(req.user._id);
    Post.find({postedBy:req.user._id})
    .populate("postedBy","_id name")
    .then(posts=>{
        res.json({posts})
    }).catch(err=>{
        console.log(err);
    })
})

route.get('/allpost',(req,res)=>
{
    Post.find().populate("postedBy","_id name").then(posts=>{
        res.json({posts})
    })
})

route.post('/createpost',requireloginmid,(req,res)=>
{
    const {title,body} = req.body
    if(!title || !body)
    return res.status(422).json({error:"Please enter all the fields"})
    //res.send("OK")
    req.user.password = undefined
    const post = new Post({
       title,
        body,
        postedBy:req.user
    })
    post.save()
    .then(result=>
        {
            console.log(result)
            res.json({post:result})
        })
        .catch(err=>
            {
                console.log(err)
            })
})

module.exports = route
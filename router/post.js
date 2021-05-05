const express = require('express')
const route = express.Router();
const mongoose = require('mongoose')
const requireloginmid = require('../middleware/requirelogin')
const Post = mongoose.model('Post')

//route.get('/test',(req,res)=>
//{
//  res.send("hello this is test")
//  console.log("hello world");
//})
route.post('/mypost',requireloginmid,(req,res)=>
{
    console.log(req.body);
    Post.find({postedBy:req.user._id})
    .populate("postedBy","_id name")
    .then(posts=>{
        res.json({posts})
    }).catch(err=>{
        console.log(err);
    })
})

route.get('/allpost',requireloginmid,(req,res)=>
{
    Post.find()
    .populate("postedBy","_id name")
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err);
    })
})

route.post('/createpost',requireloginmid,(req,res)=>
{

    const {title,body,photo} = req.body
    console.log(title,body,photo)
    if(!title || !body || !photo)
    return res.status(422).json({error:"Please enter all the fields"})
    //res.send("OK")
    req.user.password = undefined
    const post = new Post({
       title,
        body,
        photo,
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
route.put('/like',requireloginmid,(req,res)=>
{
    Post.findByIdAndUpdate(req.body.postID,{
        $push:{likes:req.user._id}
    },{
        new:true
    }).exec((err,result)=>
    {
        if(err)
        return res.status(422).json({error:err})
        else
        res.json(result)
    })

})
route.put('/unlike',requireloginmid,(req,res)=>
{
    Post.findByIdAndUpdate(req.body.postID,{
        $pop:{likes:req.user._id}
    },{
        new:true
    }).exec((err,result)=>
    {
        if(err)
        return res.status(422).json({error:err})
        else
        res.json(result)
    })

})

module.exports = route
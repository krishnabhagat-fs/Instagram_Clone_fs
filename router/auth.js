const express = require('express')
const route = express.Router();
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs');
const { Router } = require('express')
const jwt = require('jsonwebtoken')
const {SECRET_KEY} = require('../keys')
const requirelogin = require('../middleware/requirelogin')

route.get('/protected',requirelogin,(req,res)=>
{
    res.send("Hello")
})

route.post('/about',(req,res)=>
{
    //console.log(req.body);
    const {name,email,password} = req.body
    if(!name || !email || !password)
    return res.status(404).json({"Error":"Please fill all the fields"})
    User.findOne({email:email})
    .then((savedUser)=>
    {
        if(savedUser)
        return res.status(404).json({"Error":"User already exist"})
        bcrypt.hash(password,12)
        .then((hashedpassword)=>
        {
            const user = new User({
                email,
                password:hashedpassword,
                name
            })
            user.save()
            .then(user=>
                {
                    res.json({message:"Saved Sucessfully"})
                })
                .catch(err=>{
                    console.log(err);
                })

        })
        
    })
    .catch(err=>{
        console.log(err);
    })
    
})

route.post('/signin',(req,res)=>
{
    const {name,email,password} = req.body
    if(!email || !password)
    return res.status(404).json({error:"please enter email and password"})
    User.findOne({email:email})
    .then(saveduser=>
        {
            if(!saveduser)
            return res.status(404).json({error:"Invalid email or password"})
            bcrypt.compare(password,saveduser.password)
            .then(domatch=>{
                if(domatch){
                    const token = jwt.sign({_id:saveduser._id},SECRET_KEY)
                    res.json({token})
                }
                else
                res.status(404).json({error:"Invalid email or passward"})
            }).catch(err=>
                {
                    console.log(err);
                })
        }).catch(err=>
            {
                console.log(err);
            })
})

module.exports = route;
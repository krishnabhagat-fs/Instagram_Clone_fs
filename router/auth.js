const express = require('express')
const route = express.Router();
const mongoose = require('mongoose')
const User = mongoose.model("User")

route.get('/',(req,res)=>
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
        const user = new User({
            email,
            password,
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
    .catch(err=>{
        console.log(err);
    })
    
})

module.exports = route;
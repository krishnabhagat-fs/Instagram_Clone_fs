const express = require('express')
const route = express.Router();

route.get('/',(req,res)=>
{
    res.send("Hello")
})

route.post('/about',(req,res)=>
{
    console.log(req.body);
    const {name,email,password} = req.body
    if(!name || !email || !password)
    res.status(401).json({"Error":"Please fill all the fields"})
    else
    res.json({"Sucesfull":"value passed"})
})

module.exports = route;
const express = require('express')
const PORT = 5000
const app = express()

const middleWare = (req,res,next)=>
{
    console.log("Middleware Executed")
    next()
}

app.get('/home',middleWare,(req,res)=>{
    res.send("Home Page")
    console.log("Roue to home page")
})
app.get('/',(req,res)=>{
    res.send("Hello World")
    console.log("Roue to /")
})

app.listen(PORT,()=>
    {
        console.log("server running in localhost",PORT)
    })
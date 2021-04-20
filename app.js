const express = require('express')
const PORT = 5000
const app = express()
const mongoose = require('mongoose')
const {MONGOURI} = require('./keys')
require('./model/user')
//mongoose.model('User')
app.use(express.json())
app.use(require('./router/auth'))

mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}

    );
mongoose.connection.on('connected',()=>
{
    console.log("Connected to mongo yeah");
})

mongoose.connection.on('error',(err)=>
{
    console.log("Connecting error",err);
})

//69iypLgeHf6JCOJZ


app.listen(PORT,()=>
    {
        console.log("server running in localhost",PORT)
    })
const express = require('express')
const PORT = 5000
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const {MONGOURI} = require('./keys')

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
require('./model/user')
require('./model/post')
app.use(cors())
app.use(express.json())
app.use(require('./router/auth'))
app.use(require('./router/post'))


app.listen(PORT,()=>
    {
        console.log("server running in localhost",PORT)
    })
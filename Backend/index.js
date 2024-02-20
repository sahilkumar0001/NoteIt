const connectToDB = require('./database');
const express = require('express');
const cors = require("cors")
connectToDB();
const app=express();
const port=5000;

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello Wrold');
})
app.use('/api/auth',require('./routes/auth.js'));
app.use('/api/notes',require('./routes/notes.js'));

app.listen(port,()=>{
    console.log('App is running in port 5000...')
})

const express = require('express');
const path = require('path'); 
const fs = require('fs');
const apiroutes = require('./routes/apiroutes')
const htmlroutes= require('./routes/htmlroutes')

// const index = require('../../index.js')

const app = express(); 

app.use(express.json());


app.use(express.urlencoded({extended: false}));


app.use(express.static('public'));
//notes for pushing up to heroku 

app.use('/api', apiroutes);
app.use('/', htmlroutes); 
// get all notes 

// module.exports = router; 
// 
const PORT = 8000;

app.listen(process.env.PORT || 8000); 




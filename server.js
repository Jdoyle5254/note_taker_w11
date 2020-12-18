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


app.use('/api', apiroutes);
app.use('/', htmlroutes); 
// get all notes 

// module.exports = router; 
// 
const PORT = 8000;
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); 




const express = require('express');
const path = require('path'); 
const index = require('./js./index.js')

const app = express(); 
const PORT = 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); 




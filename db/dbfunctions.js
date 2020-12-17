const util = require('util');
const fs = require('fs');
const uuidv1 = require('uuid/v1')



const readFileAsync = util.promisify(fs.readFile) 

fs.readFile('./db/db.json', 'utf8', function(err, data){   
    // Display the file content 
    res.json(data);
    console.log(data); 
}); 


const writeFileAsync = util.promisify(fs.writeFile) 

fs.writeFile('./db/db.json', 'utf8', function(err, data){   
    // Display the file content 
    res.json(data);
    console.log(data); 
}); 

class dbfunctions {} 
module.exports = new dbfunctions(); 
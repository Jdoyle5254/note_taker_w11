// const util = require('util');
// const fs = require('fs');
// const uuid = require('uuid');
// const data = require('../db/db.json');


// 
// const readFileAsync = util.promisify(fs.readFile) 
// const appendFileAsync = util.promisify(fs.appendFile) 
class dbfunctions {
    readFile(){
       //return readFileAsync('./db/db.json', 'utf8', function(err, data){   
        // return fs.readFile('./db/db.json', 'utf8', function(err, data){   
        //     if (err) {
        //         throw err;
        //     }
        //      // Display the file content 
        //     const notes = JSON.parse(data);
        //     console.log(notes);      
        // })
        // .then(data => {
        //     console.log(data);

        //     return data;
        // });
    }

    // appendFile(){
    //     return fs.appendFile('./db/db.json', JSON.stringify(data), (err) => {   
    //         if(err) throw err
    //          console.log("what are you?", data)
           
    //     }); 
    // }

} 
// module.exports = new dbfunctions(); 

// const util = require('util');

// async function fn() {
//   return 'hello world';
// }
// const callbackFunction = util.callbackify(fn);

// callbackFunction((err, ret) => {
//   if (err) throw err;
//   console.log(ret);
// });
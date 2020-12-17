const util = require('util');
const fs = require('fs');
const uuid = require('uuid')



const readFileAsync = util.promisify(fs.readFile) 
const writeFileAsync = util.promisify(fs.writeFile) 
class dbfunctions {
    readFile(){
       return readFileAsync('./db/db.json', 'utf8', function(err, data){   
            if (err) {
                throw err;
            }
        console.log(data);

            // Display the file content 
                return data; 
        }).then(data => {
            console.log(data);

            return data;
        });
    }

    writeFile(){
        writeFileAsync('./db/db.json', 'utf8', function(err, data){   
            // Display the file content n (data)
            return data; 
        }); 
    }

} 
module.exports = new dbfunctions(); 

// const util = require('util');

// async function fn() {
//   return 'hello world';
// }
// const callbackFunction = util.callbackify(fn);

// callbackFunction((err, ret) => {
//   if (err) throw err;
//   console.log(ret);
// });
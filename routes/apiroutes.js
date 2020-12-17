const router = require('express').Router();
const util = require('util');
const uuid = require('uuid'); 
const fs = require('fs');


// this GET reads all the notes in the db.json file
router.get('/notes', (req, res) => {     
    

    fs.readFile('./db/db.json', 'utf8', function(err, data){   
        if (err) {
            throw err;
        }
         // Display the file content 
        const notes = JSON.parse(data);
        
        res.json(notes);   
    })
     
});


// //Create new note and push to db.json as an array
router.post('/notes', (req, res) => {
    let notes = {}
    const newNote = {
        id: uuid.v4(),
        title: req.body.title,
        text: req.body.text,         
    }
    fs.readFile('./db/db.json', 'utf8', function(err, data){   
        if (err) {
            throw err;
    }
    notes= JSON.parse(data);    
    notes.push(newNote);
    

    fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {   
            
        if(err) throw err 
           
    }) 
        res.redirect('/')   

    });  
});

    

// delete note This function removes the note from the array
router.delete('/notes/:id', (req, res) => {
    let noteData ={};
    fs.readFile('./db/db.json', 'utf8', function(err, data){   
        if (err) {
            throw err;
        }
        console.log("dara read", data);

       noteData = JSON.parse(data);
    
        console.log("delete file", noteData);
    

        const found = noteData.some(note => note.id === (req.params.id));
        
        if(found) {
        const newNotes = noteData.filter(note => note.id !== (req.params.id))   
        fs.writeFile('./db/db.json', JSON.stringify(newNotes), (err) => {   
            
            if(err) throw err 
            
            }) 

            res.json({
                msg: 'Note deleted', 
                notes: newNotes
            });
        }
        else {
            res.status(400).json({ msg: `No notes with the id of ${req.params.id}`});
        }
    });
});

module.exports = router; 
const express = require('express');
const path = require('path'); 
const fs = require('fs');

// const index = require('../../index.js')

const app = express(); 

app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public'))); 
// const express = require('express');
// const uuid = require('uuid')
// const router = express.Router();
// const members = require('../../Members'); 

// get all notes 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
}); 

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
})

app.get('/api/notes', (req, res) => {
   
    fs.readFile('db/db.json', 'utf8', function(err, data){   
        // Display the file content 
        res.json(data);
        console.log(data); 
    }); 

}); 

// get one note
app.get('/api/notes/:id', (req, res) => {
    const found = notes.some(notes => notes.id === parseInt(req.params.id));
    
    if(found) {
        res.json(notes.filter(notes => notes.id === parseInt(req.params.id)));
    }
    else {
        res.status(400).json({ msg: `No Notes with the id of ${req.params.id}`});
    }
    
});

//Create new note 
app.post('/api/notes', (req, res) => {
    const newNote = {
        noteTitle: req.body.title,
        noteText: req.body.text,
         
    }
    if(!newMember.name || !newMember.email) {
       return res.status(400).json({ msg: 'Please include a name and email'});
    }
    notes.push(newNote);
    // res.json(members);
    res.redirect('/');
}); 

// update active note
app.put('/api/notes/:title', (req, res) => {
    const found = notes.some(notes => notes.id === parseInt(req.params.id));
    
    if (found) {
        const updNote = req.body;
        notes.forEach(notes => {
            if(newNote.id === parseInt(req.params.id)) {   
               
               res.json({ msg: 'Member updated', member:member });
            }
        });
    }
    else {
        res.status(400).json({ msg: `No  note with the id of ${req.params.id}`});
    }
    
});
// delete note 
app.delete('/api/notes/:title', (req, res) => {
    const found = notes.some(notes => notes.id === parseInt(req.params.id));
    
    if(found) {
        res.json({
             msg: 'Note deleted', 
             notes: notes.filter(notes => notes.id !== pareInt(req.params.id))
        });
    }
    else {
        res.status(400).json({ msg: `No notes with the id of ${req.params.id}`});
    }
    
});


// module.exports = router; 
// 
const PORT = 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); 




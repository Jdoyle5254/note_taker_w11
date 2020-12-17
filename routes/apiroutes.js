const router = require('express').Router();
const dbfunctions = require('./db/dbfunctions'); 



router.get('/notes', (req, res) => {
   dbfunctions.readnotes 
   .then{}
}); 

// get one note
router.get('/notes/:id', (req, res) => {
    const found = notes.some(notes => notes.id === parseInt(req.params.id));
    
    if(found) {
        res.json(notes.filter(notes => notes.id === parseInt(req.params.id)));
    }
    else {
        res.status(400).json({ msg: `No Notes with the id of ${req.params.id}`});
    }
    
});

//Create new note 
router.post('/notes', (req, res) => {
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
router.put('/notes/:title', (req, res) => {
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
router.delete('/notes/:id', (req, res) => {
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

module.exports = router; 
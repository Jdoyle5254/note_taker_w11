const router = require('express').Router();
const dbfunctions = require('../db/dbfunctions'); 
const util = require('util');
const uuid = require('uuid'); 
const notes = require('../db/db.json'); 

// const getNotes = util.promisify(dbfunctions.readFile) 


router.get('/notes', (req, res) => {

    res.json(notes);
    console.log(notes); 
//    var t = getNotes().then(notes => {
        // console.log(notes);
        // res.json(notes); 
    // });
    // var k = dbfunctions.readFile();
    // console.log("test " + k);

    
    // dbfunctions.readFileAsync.then(function(result){
    //     res.json(result); 
    // })
//    dbfunctions.readFileAsync().then(notes => {
//         res.json(notes); 
//    });
});

// get one note
// router.get('/notes/:id', (req, res) => {
//     const found = notes.some(notes => notes.id === parseInt(req.params.id));
    
//     if(found) {
//         res.json(notes.filter(notes => notes.id === parseInt(req.params.id)));
//     }
//     else {
//         res.status(400).json({ msg: `No Notes with the id of ${req.params.id}`});
//     }
    
// });

// //Create new note 
// router.post('/notes', (req, res) => {
//     const newNote = {
//         noteTitle: req.body.title,
//         noteText: req.body.text,
         
//     }
//     if(!newMember.name || !newMember.email) {
//        return res.status(400).json({ msg: 'Please include a name and email'});
//     }
//     notes.push(newNote);
//     // res.json(members);
//     res.redirect('/');
// }); 

// // update active note
// router.put('/notes/:title', (req, res) => {
//     const found = notes.some(notes => notes.id === parseInt(req.params.id));
    
//     if (found) {
//         const updNote = req.body;
//         notes.forEach(notes => {
//             if(newNote.id === parseInt(req.params.id)) {   
               
//                res.json({ msg: 'Member updated', member:member });
//             }
//         });
//     }
//     else {
//         res.status(400).json({ msg: `No  note with the id of ${req.params.id}`});
//     }
    
// });
// // delete note 
// router.delete('/notes/:id', (req, res) => {
//     const found = notes.some(notes => notes.id === parseInt(req.params.id));
    
//     if(found) {
//         res.json({
//              msg: 'Note deleted', 
//              notes: notes.filter(notes => notes.id !== pareInt(req.params.id))
//         });
//     }
//     else {
//         res.status(400).json({ msg: `No notes with the id of ${req.params.id}`});
//     }
    
// });

module.exports = router; 
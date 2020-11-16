const db = require('../db/db.json');
const fs = require('fs');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { route } = require('./htmlRoutes');


router.get('/notes', (req, res) => {

  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) throw err;
    //parse data from db array
    const noteData = JSON.parse(data);
    //push the new note into db array
    res.json(noteData)
  });
});

router.post('/notes', (req, res) => {
  //look at module project for setting an id
  let noteId = uuidv4();

  let newNote = {
    id: noteId,
    title: req.body.title,
    text: req.body.text
  };

  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) throw err;
    //parse data from db array
    const noteArr = JSON.parse(data);
    //push the new note into db array
    noteArr.push(newNote);

    fs.writeFile('./db/db.json', JSON.stringify(noteArr, null, 2), err => {
      if (err) throw new err;

      res.send(db);

      console.log('New Note Created!')
      console.log(noteArr);
    })
  })
});

route.delete('/notes/:id', (req, res) => {
  noteData = fs.readFileSync('./db/db.json','utf8');

  noteData = JSON.parse(noteData);

  noteData = noteData.filter(function(note) {
    return noteData.id  
  })

})

module.exports = router;

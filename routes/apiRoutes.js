
const db = require('../db/db.json');
const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

const displayNotes = (data) => {
  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(data))
}

//create route to send back a html file 
router.get('/notes', (req, res) => {
  res.send(db)
});

router.post('/notes', (req, res) => {
  //look at module project for setting an id
  let noteId = uuidv4();

  
  const  newNote = {
    id: noteId,
    title: req.body.title,
    text: req.body.text
  }
  

  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) throw err;
    //parse data from db array
    const noteArr = JSON.parse(data);
    //push the new note into db array
    noteArr.push(newNote);
  
    fs.writeFile('./db/db.json', JSON.stringify(noteArr, null, 2), err => {
      if (err) throw new err;

      res.send(db);
      displayNotes(data);
      console.log(noteArr);
    })
  })
});

router.delete('/notes/:id', (req, res) => {
  const noteId = req.params.id;

  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) throw new err;

    let currentArr = JSON.parse(data);
    let newArr = currentArr.filter(note => note.id !== noteId);

    fs.writeFile('./db/db.json', JSON.stringify(newArr, null, 2), err => {
      if (err) throw err;
      res.send(db);
      console.log('note deleted')
    })
  })

})

module.exports = router;

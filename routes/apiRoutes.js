
const db = require('../db/db.json');
const fs = require('fs');
const router = require('express').Router();
const uuid = require('uuid/v1')



// app.use('/static', express.static(__dirname + '/public'));
//create route to send back a html file 
router.get('/notes', (req, res) => {
  let result = [];

  result = notes;
  return res.json(result);
});

router.post('/notes', (req, res) => {
  //look at module project for setting an id
  let noteId = uuid();

  let newNote = {
    id: noteId,
    title: req.body.title,
    text: req.body.text
  };

  fs.readFile(db, 'utf8', (err, data) => {
    if (err) throw err;
    //parse data from db array
    const noteArr = JSON.parse(data); 
    //push the new note into db array
    noteArr.push(newNote);

    fs.writeFile(db, JSON.stringify(newNoteArr, null, 2), err => {
      if (err) throw new err;

      res.send(db);

      alert('New Note Created!')
    })
  })
 
});


module.exports = router;

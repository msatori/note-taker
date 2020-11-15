const router = require('express').Router();
const { notes } = require('.././Develop/db/db.json');
const path = require('path');


router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../Develop/public/notes.html'))
});

router.post('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../Develop/public/index.html'));
  
});

// if (!validateNote(req.body)) {
//   res.status(400).send('Please add a note');
// } else {
//   const note = createNewNote(req.body, notes);
//   res.json(note);
// }
//use id to delete note(bonus)
module.exports = router;

const path = require('path');
const router = require('express').Router();
// app.use('/static', express.static(__dirname + '/public'));
//create route to send back a html file 
router.get('/notes', (req, res) => {
  let result = [];

  result = notes;
  return res.json(result);
});

router.post('/notes', (req, res) => {
  //look at module project for setting an id

  //validate data
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//use note id to delete note

module.exports = router;

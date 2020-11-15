
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
  let result = findById(req.params.id, notes);
  if(result) {
    res.json(result);
  } else {
    res.send(404)
  }
  //validate data
 
});

//use note id to delete note
router.delete('/notes:id', (req, res) => {
  let result = findById(req.params.id, notes);
  
  .removeNote(req.params.id)
  .then(() => res.json({ok: true}))
  .catch((err) => res.status(404).json(err))

})

module.exports = router;

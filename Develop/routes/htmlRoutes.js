const { timeStamp } = require('console');
const path = require('path');
const router = require('express').Router();
//create route to send back a html file 
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/index.html'));
  });
  
module.exports = router;

//why isnt this working
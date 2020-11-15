const { timeStamp } = require('console');
const path = require('path');
const router = require('express').Router();
// app.use('/static', express.static(__dirname + '/public'));
//create route to send back a html file 
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/index.html'));
  });
  
module.exports = router;

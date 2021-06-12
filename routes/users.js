var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:name/profile', function(req, res, next) {
  console.log("req.params is", req.params)
  res.json({success: 'yay'})
})

// GET
// POST
// PUT
// DELETE
// RESTful API's'

// Dog
// GET /dogs
// POST /dogs
// PUT /dogs/1
// DELETE /dogs/

// 1. Add Database to our backend
// 2. Connect our backend with the front end react app

router.post('/create', function(req, res, next) {
  console.log("req.body is", req.body)
  res.json({success: 'yay'})
})

router.get('/jack', function(req, res, next) {
  // console.log("req.query is", req.query)
  // write sql code to fetch information from the DB
  // manipulate the information
  // send back the response

  // console.log("req.params is", req.params)
  // console.log("req.body is", req.body)
  res.json({success: 'yay'})
});

module.exports = router;

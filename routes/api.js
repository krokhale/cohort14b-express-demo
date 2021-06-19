var express = require('express');
var router = express.Router();
const {User} = require('../lib/models');


// POST /users
// GET /users
// PUT /users/1
// DELETE /users/1

// POST http://localhost:3000/api/v1/users
router.post('/users', async function(req, res, next) {
    let user = await User.create(req.body)
    res.json(user)
});

router.get('/users', async function(req, res, next) {
    let users = await User.findAll({})
    res.json(users)
});

router.put('/users/:id', async function(req, res, next) {
    let updatedUser = await User.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    // // write some code here to create a row in the users table
    res.json(updatedUser)
});

router.delete('/users/:id', async function(req, res, next) {
    let user = await User.destroy({where: {id: req.params.id}});
    // write some code here to create a row in the users table
    res.json(user)
});


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;

var express = require('express');
var router = express.Router();
const auth = require('../middlewares/auth');
const getQuery = require('../middlewares/csvQuery').getQuery;
const postQuery = require('../middlewares/csvQuery').postQuery;
const putQuery = require('../middlewares/csvQuery').putQuery;
const deleteQuery = require('../middlewares/csvQuery').deleteQuery;

router.get('/', auth, getQuery, async function(req, res, next) {
    console.log(req.id);
    res.status(200).end();
});

router.post('/', auth, postQuery, async function(req, res, next) {
    res.status(200).end();
})

router.put('/', auth, putQuery, async function(req, res, next) {
    res.status(200).end();
})

router.delete('/', auth, deleteQuery, async function(req, res, next) {
    res.status(200).end();
})

module.exports = router;
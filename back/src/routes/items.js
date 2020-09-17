var express = require('express');
var router = express.Router();
const auth = require('../middlewares/auth');
const getQuery = require('../middlewares/csvQuery').getQuery;
const postQuery = require('../middlewares/csvQuery').postQuery;
const putQuery = require('../middlewares/csvQuery').putQuery;
const deleteQuery = require('../middlewares/csvQuery').deleteQuery;

/**
 * Get items from csv
 * @name get/items/
 * @param {Bearer token} Authorization - Auth token
 * @param {string} chariot - chariot id (optionnal)
 * @param {string} type - item type (optionnal)
 * @param {string} zone - item zone (optionnal)
 * @param {integer} quantity - item quantity (optionnal)
 * @param {string} sav - item sav (optionnal)   
 */
router.get('/', auth, getQuery, async function(req, res, next) {
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
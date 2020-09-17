var express = require('express');
var router = express.Router();
const auth = require('../middlewares/auth');

router.get('/', auth, function(req, res, next) {
    console.log(req.id);
    res.status(200).send({ 'status': 'success' });
});

module.exports = router;
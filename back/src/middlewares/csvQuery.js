const csvdb = require('node-csv-query').default;

const dbPath = './data/TableZozio.csv';
var dbConnection = null;
var query = {};

/**
 * Build query with request body parameters
 * @param {*} req 
 */
const buildParameters = async (req) => {
    if (req.body.chariot) {
        query.Chariot = req.body.chariot;
    }
    if (req.body.type) {
        query.Type = req.body.type;
    }
    if (req.body.zone) {
        query.Zone = req.body.zone;
    }
    if (req.body.quantity) {
        query.Quantité = req.body.quantity;
    }
    if (req.body.sav) {
        query.sav = req.body.sav;
    }
};

/**
 * Connection to db
 */
try {
    csvdb(dbPath).then(function (db) {
        dbConnection = db;
    });
} catch(e) {
    console.log('Connexion to db failure');
}

/**
 * Get items from csv with request body parameters
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const getQuery = async (req, res, next) => {
    await buildParameters(req);
    try {
        await dbConnection.find({...query})
        .then(function (record) {
            res.write(JSON.stringify(record));
            query = {};
        });
    } catch(e) {
        res.status(503).send({ error: 'Connection to db failure' });
    }
    next();
}

/**
 * Post items on csv with request body parameters
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const postQuery = async (req, res, next) => {
    await buildParameters(req);
    res.write(JSON.stringify({ post: 'ok' }));
    next();
}

/**
 * Replace items on csv with request body parameters
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const putQuery = async (req, res, next) => {
    await buildParameters(req);
    res.write(JSON.stringify({ put: 'ok' }));
    next();
}

/**
 * Delete items from csv with request body parameters
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const deleteQuery = async (req, res, next) => {
    await buildParameters(req);
    res.write(JSON.stringify({ delete: 'ok' }));
    next();
}

module.exports = { getQuery, postQuery, putQuery, deleteQuery };

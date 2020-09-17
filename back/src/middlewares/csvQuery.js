const csvdb = require('node-csv-query').default;

const dbPath = './data/TableZozio.csv';
var dbConnection = null;
var query = {};

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

csvdb(dbPath).then(function (db) {
    dbConnection = db;
});


const getQuery = async (req, res, next) => {
    await buildParameters(req);
    await dbConnection.find({...query})
    .then(function (record) {
        res.write(JSON.stringify(record));
    });
    next();
}

const postQuery = async (req, res, next) => {
    await buildParameters(req);
    res.write(JSON.stringify({ post: 'ok' }));
    next();
}

const putQuery = async (req, res, next) => {
    await buildParameters(req);
    res.write(JSON.stringify({ put: 'ok' }));
    next();
}

const deleteQuery = async (req, res, next) => {
    await buildParameters(req);
    res.write(JSON.stringify({ delete: 'ok' }));
    next();
}

module.exports = { getQuery, postQuery, putQuery, deleteQuery };

/**
 * Verify auth token
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer', '');
        const _id = token;

        if (!_id) {
            throw new Error();
        }
        req.id = _id;
    } catch (e) {
        res.status(401).send({ error: 'Authentication failed' });
    }
    next();
}

module.exports = auth;
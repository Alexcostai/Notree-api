import jwt from 'jsonwebtoken';
import createErrorFactory from '../errors/ErrorFactory.js'

const secretKey = "CLAVE_SECRETA";
const errorFactory = createErrorFactory();

function verifyToken(req, res, next) {
    const token = req.header('x-access-token')
    if (token===undefined) {
        throw errorFactory.noTokenProvided();
    }
    const decoded = jwt.verify(token, secretKey);
    req.userId = decoded.id;
    next()
}

function getToken(userData) {
    return jwt.sign(userData, secretKey)
}

export { verifyToken, getToken }
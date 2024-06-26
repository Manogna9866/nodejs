const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(401).json({ message: 'Unauthorized:Bearer token missing or invalid' });
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, 'my-secretKey', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'unauthorizes:invalid token' });
        }
        req.user = decoded;
        next();
    });
};

module.exports = verifyToken





function verifyToken(req, res, next) {
    // Extract the token from the Authorization header
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' '); 
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }else {
        res.sendStatus(403);
    }
}

module.exports = verifyToken;

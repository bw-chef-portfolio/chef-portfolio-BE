const jwt = require("jsonwebtoken");

const secrets = require("../api/secrets");

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, secrets.jwtSecret, (err, decondedToken) => {
            if (err) {
                res.status(401).json({ message: "Invalid Token "});
            } else {
                req.decondedToken = decondedToken;
                next();
            }
        });
    }else {
        res.status(401).json({ message: "No Token Provided" });
    }
};
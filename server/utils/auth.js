const jwt = require("jsonwebtoken");
require('dotenv').config()

// set token secret and expiration date
const secret = `${process.env.GG_SECRET}`;
console.log(secret)
const expiration = "2h";

module.exports = {
    // function for our authenticated routes
    authMiddleware: function ({ req, res, next }) {
        // allows token to be sent via  req.query or headers

        let token = req.body.token || req.query.token || req.headers.authorization;

        // ["Bearer", "<tokenvalue>"]
        if (req.headers.authorization) {
            token = token.split(" ").pop().trim();
        }

        if (!token) {
            return req;
        }

        // verify token and get user data out of it
        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            console.log(data)
            req.user = data;
        } catch (error) {
            console.log("Invalid token");
            console.log(error)
        }

        return req;
    },
    signToken: function ({ username, email, _id }) {
        const payload = { username, email, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};
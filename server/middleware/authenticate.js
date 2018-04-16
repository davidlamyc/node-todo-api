//[{"key":"x-auth","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWQ0YTFhNjc3MmU0MzI0MmUyMGUxZTEiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTIzODg0NDU0fQ.1pEToWz_BiYO7Fr-gUdHvT0Uwq06Q_Xfr-RmK6EtKZw","description":""}]

var {User} = require('./../db/models/user');

var authenticate = (req, res, next) => {
    var token = req.header('x-auth');

    User.findByToken(token).then((user) => {
        if (!user) {
            return Promise.reject();
        };

        req.user = user;
        req.token = token;
        next();
    }).catch((e) => {
        res.status(401).send();
    })
};

module.exports = {authenticate};
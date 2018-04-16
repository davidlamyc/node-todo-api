const jwt = require('jsonwebtoken');

var data = {
    id: 10
}

var token = jwt.sign(data, 'some secret');

var decoded = jwt.verify(token, 'some secret');
console.log(decoded);
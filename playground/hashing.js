const {SHA256} = require("crypto-js");

var data = {
    id: 4
};

var token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'some secret').toString()
}

var resultHash = SHA256(JSON.stringify(token.data) + 'some secret').toString();

// hacker tries to change value
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

if (resultHash === token.hash) {
    console.log('Data was not changed');
} else {
    console.log('Data was changed. Do not accept.')
};
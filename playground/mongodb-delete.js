// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to server.')
    }
    console.log('Connected to server.');

    // deleteMany
    db.collection('Todos').deleteMany({text: 'Eat lunch'})
        .then((result) => {
            console.log(result);
        });

    // deleteOne

    // findOneAndDelete

    // db.close();
});

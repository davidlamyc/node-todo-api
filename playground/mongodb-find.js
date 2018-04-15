// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to server.')
    }
    console.log('Connected to server.');

    db.collection('Todos')
        .find({_id: new ObjectID('5ad2c455dcba2502987672bc')})
        .toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch Todos', err)
    });

    // db.close();
});
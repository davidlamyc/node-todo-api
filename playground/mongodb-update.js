// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to server.')
    }
    console.log('Connected to server.');

    db.collection("Todos").findOneAndUpdate({
        _id: new ObjectID('5ad2c455dcba2502987672bc')
    },{
        $set: {
            completed: true
        }
    },{
        returnOriginal: false
    }). then((result) => {
        console.log(result);
    });

    // db.close();
});

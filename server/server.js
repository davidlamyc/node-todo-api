var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');

var {Todo} = require('./db/models/todo');
var {User} = require('./db/models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text,
        completed: req.body.completed
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    Todo.findById(id).then((todos) => {
        if (!todo){
            return res.status(404).send();
        }
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    })
});

app.listen(port, () => {
    console.log('Started on port', port);
})


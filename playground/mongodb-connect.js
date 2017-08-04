// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     'completed': false
    // }, (err, result) => {
    //     if (err) return console.log('Unable to insert todo', err);

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Elad',
    //     age: 20,
    //     location: 'Tel-Aviv'
    // }, (err, result) => {
    //     if (err) return console.log('Unable to insert todo', err);
    //     console.log(result.ops[0]._id.getTimestamp())
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })


    db.close();
});
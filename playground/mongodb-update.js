// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos')
    //     .findOneAndUpdate({
    //         _id: new ObjectID('5984a1f0956657d9884567dd')
    //     }, {
    //         $set: {
    //             completed: true,
    //         }
    //     },{
    //         returnOriginal: false
    //     } ).then(res => console.log(res))

    db.collection('Users')
        .findOneAndUpdate({
            _id: new ObjectID('59849ef698201b239c6813b3')
        }, {
            $set: { name: 'Elad' },
            $inc: { age: -2 }
        }, {
            returnOriginal: false
        }).then(res => console.log(res))

    db.close();
});

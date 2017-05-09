const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/notes';

exports.lookDaily = function (data, callback) {
    var look = function (db, callback) {
        const collection = db.collection('note');
        collection.find().toArray(function (err, result) {
            if (err) {
                console.log('Error:' + err);
                return;
            }
            callback(result);
        });

    };

    MongoClient.connect(url, function (err, db) {
        look(db, function (result) {
            callback(result);
        });
    });

}

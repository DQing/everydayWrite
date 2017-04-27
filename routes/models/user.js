const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/notes';

exports.selectOne = function (name, callback) {
    var selectData = function (db, callback) {
        const collection = db.collection('note');
        collection.find(name).toArray(function (err, result) {
            if (err) {
                console.log('Error:' + err);
                return;
            }
            callback(result);
        });
    };
    MongoClient.connect(url, function (err, db) {
        selectData(db, function (result) {
            callback(result);
        });
    });
};


exports.register = function (data, callback) {
    var insertData = function (db, callback) {
        const collection = db.collection('note');
        collection.insert(data, function (err, result) {
            if (err) {
                console.log('Error:' + err);
                return;
            }
            callback(result);
        });
    };
    var selectData = function (db, callback) {
        const collection = db.collection('note');
        collection.find({userName: data.userName}).toArray(function (err, result) {
            if (err) {
                console.log('Error:' + err);
                return;
            }
            callback(result);
        });
    };
    MongoClient.connect(url, function (err, db) {
        selectData(db, function (result) {
            if (result.length === 0) {
                insertData(db, function (result) {
                    callback(result);
                });
            }
            else {
                callback('0');
            }
        });
    });
};

exports.lookDaily = function (data,callback) {
    var look = function (db,callback) {
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

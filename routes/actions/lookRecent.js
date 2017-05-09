const express = require('express');
const db = require('../models/lookToday');

exports.findDaily = function (req, res) {
    const status = 'All';
    db.lookDaily(status, function (result) {
        if (result === '0') {
            res.send('0').end();
        }
        else {
            res.send(result).end();
        }
    })
};

const express = require('express');
const userAction = require('./actions/userAction');
const lookToday = require('./actions/lookToday');
const lookRecent = require('./actions/lookRecent');

const router = express.Router();


router.post('/login', userAction.selectOneToLogin);
router.post('/register', userAction.saveToRegister);
router.get('/lookToday', lookToday.findDaily);
router.get('/lookRecent', lookRecent.findDaily);
router.get('/lookPersonal', lookRecent.findDaily);

module.exports = router;

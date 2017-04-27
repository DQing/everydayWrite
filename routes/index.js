const express = require('express');
const userAction = require('./actions/userAction');

const app = new express();
const router = express.Router();


router.post('/login', userAction.selectOneToLogin);
router.post('/register', userAction.saveToRegister);
router.get('/look', userAction.findDaily);

module.exports = router;

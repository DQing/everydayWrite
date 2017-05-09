var express = require('express');
var app = express();


app.use(express.static('./public'));


const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use('/', require('./routes/index'));


app.listen(4000, function () {
    console.log('listening on port 3000');
})
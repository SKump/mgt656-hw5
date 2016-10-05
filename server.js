var express = require('express');
var app = express();

app.get('/fair-hare', function(request, response){
    response.send('YOU SHOULD PUT YOUR NICKNAME HERE.');
});

app.get('/', function(request, response){
    response.send('Hello MGT-656!');
});

app.listen(process.env.PORT || 4000);
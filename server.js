var express = require('express'),
    faye = require('faye');

var app = express();
var bayeux = new faye.NodeAdapter({
    mount: '/ws',
    timeout: 45
});

app.use(express.logger('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bayeux);

app.listen(8000);

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello world!');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at 127.0.0.1:" + app.get('port'));
});

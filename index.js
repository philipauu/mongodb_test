var express = require('express');
var app = express();
var port = 3500;
var routes = require('./routes/admin_routes');

app.set('view engine', 'ejs');
app.use(routes);
app.listen(port, do_listening);

function do_listening(){
    console.log("Listening on localhost: " + port);
}
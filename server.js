var logger = require("morgan"),
cors = require("cors"),
http = require("http"),
express = require("express"),
bodyParser = require("body-parser");

var app = express();
var port = 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(require('./routes'));

app.get('/hello/:foo/:bar', function (req, res) {
    res.json({result: "Hello CCT!", data: [
        req.params.foo,
        req.params.bar
    ]});
});

app.post('/hello', function(req,res){
    res.json({result: "The POST request was sent", data: req.body});

});

app.listen(port, function(err){
    console.log("Listening on port:" + port);
});
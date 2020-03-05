exports.getWorld = function(req, res){
    res.json({result: "Hello World from Controller!", data: [
        res.params.foo,
        res.params.bar
    ]});
}

exports.postWorld = function(req, res){
    res.json({result: "The POST request was sent", data: req.body});

}

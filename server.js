const express = require('express');
const request = require('request');
const app = express();
const router = express.Router();
const port = 3000;

router.get("/api/get", function(req, res) {
   res.send("Jac ist tool");
});

router.get("/api/get2", function(req, res) {
    res.send("Elias ist tool");
});

router.get("/route/find/:from/:to", function(req, res) {
    let from = req.params["from"];
    let to = req.params["to"];

    request('http://flights.eliashenrich.de/api.php?action=/route/find&from='+from+'&to='+to, function (error, response, body) {
      res.send(body)
    });
});

app.use(router);

app.listen(port);
const express = require('express');
const burger = require('../models/burger.js');

var router = express.Router();

router.get("/", function (req, res) {
    burger.all(function (data) {
        var burgersObject = {
            burgers: data
        };
        console.log(burgersObject);
        res.render("index", burgersObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insert(req.body.name, function (result) {
        res.json({
            id: result.insertId
        });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    burger.update(req.params.id, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;
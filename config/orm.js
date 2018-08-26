var connection = require("./connection.js");

var orm = {
    selectAll: function (cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, ["burgers"], function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    insertOne: function (burger_name, cb) {
        var queryString = "INSERT INTO burgers (burger_name,devoured) VALUES (?,false)";
        console.log(queryString);
        connection.query(queryString, [burger_name], function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    updateOne: function (updateCol, updateVal, condVal, cb) {
        var queryString = "UPDATE burgers SET ?? = ? WHERE id = ?";
        connection.query(queryString, [updateCol, updateVal, condVal], function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    }
};

module.exports = orm;
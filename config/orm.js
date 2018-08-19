var connection = require("./connection.js");

var orm = {
    selectAll: function () {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function (burger_name, devoured) {
        var queryString = "INSERT INTO burgers (burger_name,devoured) VALUES (?,?)";
        console.log(queryString);
        connection.query(queryString, [burger_name, devoured], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function (updateCol, updateVal, condCol, condVal) {
        var queryString = "UPDATE burgers SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [updateCol, updateVal, condCol, condVal], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;
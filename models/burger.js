const orm = require('./config/orm.js');

const burger = {
    all: function () {
        orm.selectAll();
    },
    insert: function (burger_name, devoured) {
        orm.insertOne(burger_name, devoured);
    },
    update: function (updateCol, updateVal, condCol, condVal) {
        orm.updateOne(updateCol, updateVal, condCol, condVal);
    }
};

module.exports = burger;
const orm = require('../config/orm.js');

const burger = {
    all: function (cb) {
        orm.selectAll(cb);
    },
    insert: function (burger_name, cb) {
        orm.insertOne(burger_name, cb);
    },
    update: function (updateCol, updateVal, id, cb) {
        orm.updateOne(updateCol, updateVal, id, cb);
    }
};

module.exports = burger;
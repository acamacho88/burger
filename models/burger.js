const orm = require('../config/orm.js');

const burger = {
    all: function (cb) {
        orm.selectAll(cb);
    },
    insert: function (burger_name, cb) {
        orm.insertOne(burger_name, cb);
    },
    update: function (id, cb) {
        orm.updateOne(id, cb);
    }
};

module.exports = burger;
const db = require('./database');

const Whitelist = db.sequelize.define('wl', {
    id: {
        type: db.Sequelize.STRING,
        primaryKey: true,
    }
}, {
    timestamps: false,
    freezeTableName: true
})

Whitelist.sync();

module.exports = Whitelist

const { Sequelize } = require("sequelize");
const config = require('../config.json');
const sequelize = new Sequelize(config.database[0].data, config.database[0].user, config.database[0].pass, {host: config.database[0].host, dialect: config.database[0].dialect}); 

sequelize.authenticate().then(function () {
    console.log('[MYSQL] Connect to Database')
}).catch(function (err) {
    console.log('[MYSQL] Falha ao se Conectar: ' + err)
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}


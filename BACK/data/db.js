const {Sequelize} = require("sequelize");

const db = new Sequelize("24127g8", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306
});

module.exports = db;
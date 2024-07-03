const {Sequelize} = require("sequelize");

const db = new Sequelize("24127g8", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306
});

// Alwaysdata

// const db = new Sequelize("zunay_24127", "zunay", "24127_g8", {
//     host: "mysql-zunay.alwaysdata.net",
//     dialect: "mysql",
//     port: 3306
// });


module.exports = db;
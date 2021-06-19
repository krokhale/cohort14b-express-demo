const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('mysql://root:password@localhost/express-cohort14b', {logging: false});
module.exports = {sequelize};

"use strict";

let fs = require("fs");
let path = require("path");
let Sequelize = require("sequelize");
let logger = require('../lib/logger');
let config = require('../config').database;

let sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  define: {
    //prevent sequelize from pluralizing table names
    freezeTableName: true,
    //prevent sequelize to create createdAt and updatedAt default columns
    timestamps: false,
    //prevent sequelize to create column names like columnId instead of column_id
    underscored: true,
  },
  logging: logger.trace.bind(logger),
});
let db = {};

fs
  .readdirSync(__dirname)
  .filter(function (file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function (file) {
    let model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function (modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

sequelize.sync({force: false});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

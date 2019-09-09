/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let Role = sequelize.define('role', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    alias: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'role',
  });
  return Role;
};

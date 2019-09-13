/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  let Requests = sequelize.define('requests', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    status: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    type: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    notifyPm: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    interval: {
        type: DataTypes.INTEGER(2),
        allowNull: false
    },
  }, {
    tableName: 'requests',
    classMethods: {
          associate: (models) => {
              Requests.belongsTo(models.user, {
                  as: 'user',
                  foreignKey: 'user_id'
              });
              Requests.User = {
                  model: models.user,
                  as: 'user',
                  foreignKey: 'user_id'
              }
          }
      }
  });

  return Requests
};
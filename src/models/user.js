/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  let User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    picture: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    salt: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    hash: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    role_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'role',
        key: 'id'
      }
    },
  }, {
    tableName: 'user',
    instanceMethods: {
      toJSON: function () {
        var values = Object.assign({}, this.get())
        delete values.password
        delete values.hash
        return values
      }
    },
    classMethods: {
      associate: (models) => {
        User.belongsTo(models.role, {
          as: 'role',
          foreignKey: 'role_id'
        })
        User.Role = {
          model: models.role,
          as: 'role',
          foreignKey: 'role_id'
        }
      }
    }
  })
  return User
}

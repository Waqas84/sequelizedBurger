module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("Burgers", {
    burger_name: {
      type: DataTypes.STRING,
      allownull: false,
      validate: {
        len: [2]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
   
  });
   return Burgers;
}
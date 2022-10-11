"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Inventory.belongsTo(models.User, { foreignKey: "UserId" });
      Inventory.hasMany(models.Invoice, { foreignKey: "InventoryId" });
    }
  }
  Inventory.init(
    {
      productId: DataTypes.STRING,
      productName: DataTypes.STRING,
      supplierName: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      priceToSale: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Inventory",
    }
  );
  return Inventory;
};

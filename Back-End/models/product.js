import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.UserModel);
    }
  }
  Product.init({
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    description: DataTypes.STRING,
    supplier: DataTypes.STRING,
    price: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER //Foreign key

  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
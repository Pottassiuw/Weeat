import { Sequelize } from "sequelize";

const sequelize = new Sequelize("db_weeat", "root", "", {
  dialect: "mysql",
});

const DataTypes = Sequelize.DataTypes;
const Establishments = sequelize.define("Establishments", {
  Id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

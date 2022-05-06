import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "btqo15krzzezuzebetbi", // db name,
  "uceqgbvrmpbshgqoizer", // username
  "xSBtKutu0I0plq4fUwa5", // password
  {
    host: 'btqo15krzzezuzebetbi-postgresql.services.clever-cloud.com',
    dialect: "postgres"
  }
);

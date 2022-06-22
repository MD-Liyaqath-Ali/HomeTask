const { Sequelize } = require('sequelize');

//connection to db
const sequelize = new Sequelize('postgres://postgres:1985mybro@localhost:5432/mydatabase');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//define schema for data to be inserted
const users = sequelize.define('user', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  }, login: Sequelize.STRING,
  age: Sequelize.NUMBER, password: Sequelize.STRING, isdeleted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
},
  {
    timestamps: false,
  });

module.exports = {
  users: users,
  sequelize: sequelize,
}
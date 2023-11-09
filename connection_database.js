const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('english-assistant', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

const connectDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (err) {
        console.log('Unable to connect to the database:', err);
    }
}

connectDatabase();
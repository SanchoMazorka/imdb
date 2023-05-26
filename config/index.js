module.exports = {
  development: {
    username: process.env.DEV_DB_USER,
    password: process.env.DEV_DB_PASS,
    database: process.env.DEV_DB,
    host: process.env.DEV_DB_HOST,
    //port: 3306,
    dialect: process.env.DEV_DB_DIALECT,
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  test: {
    username: process.env.DEV_DB_USER,
    password: process.env.DEV_DB_PASS,
    database: process.env.DEV_DB,
    host: process.env.DEV_DB_HOST,
    //port: 3306,
    dialect: process.env.DEV_DB_DIALECT,
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  production: {
    username: process.env.DEV_DB_USER,
    password: process.env.DEV_DB_PASS,
    database: process.env.DEV_DB,
    host: process.env.DEV_DB_HOST,
    //port: 3306,
    dialect: process.env.DEV_DB_DIALECT,
    dialectOptions: {
      bigNumberStrings: true
    }
  }
};
//export default x;
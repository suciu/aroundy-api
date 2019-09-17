let dbHost = process.env.DB_MYSQL_HOST || 'database';
let dbPass = process.env.DB_MYSQL_PASS || 'aroundy';
let dbUser = process.env.DB_MYSQL_USER || 'aroundy';
let dbPort = process.env.DB_MYSQL_PORT || '3306';
let dbName = process.env.DB_MYSQL_NAME || 'aroundy';

module.exports = {
  logger: {
    source: process.env.LOGGER_SOURCE || 'api',
    level: process.env.LOGGER_LEVEL || 'trace',
    env: process.env.APP_ENV || 'dev'
  },
  database: {
    username: dbUser,
    password: dbPass,
    database: dbName,
    host: 'database',
    dialect: 'mysql',
    port: dbPort
  },
  app: {
    port: process.env.PORT || 80,
    token: process.env.TOKEN_SECRET || 'HCm8WPeufVDL6tSQV8tP4yGcheeZZta4ZHCNurC3UVnr65E3QAvw5a'
  },
  domain: {
    web: process.env.WEB_DOMAIN || 'http://aroundy.demo'
  }
};

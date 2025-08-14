// sequelize.config.js
require('dotenv').config();

const base = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: 'mysql',
  logging: process.env.SEQ_LOGGING === 'true' ? console.log : false,
};

module.exports = {
  development: { ...base },
  test:        { ...base, database: `${base.database}_test` },
  production:  {
    use_env_variable: 'DATABASE_URL',
    dialect: base.dialect,
    timezone: base.timezone,
    logging: false,
  },
};

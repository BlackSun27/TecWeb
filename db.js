const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'TecWeb',
  password: 'Blacks_27',
  port: 5432, 
});

module.exports = pool;

import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'todos',
    password: '44511',
    port: 5432,
})

export default pool;
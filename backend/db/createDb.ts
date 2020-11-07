import mysql2 from 'mysql2/promise';

const {DB_NAME, MYSQL_USER, MYSQL_PASSWORD, DB_HOST, MYSQL_PORT} = process.env;

export default mysql2.createConnection({
    host: DB_HOST,
    port: +MYSQL_PORT!,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
}).then(connection => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME};`).then(() => {
        console.info("Database create or successfully checked");
    })
});
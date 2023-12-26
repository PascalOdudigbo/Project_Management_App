const Pool = require(pg).Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "project_management_database_development",
    password: '',
    port: 3000
});

module.exports = pool
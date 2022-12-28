const mysql = require('mysql');
const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = require('../utils/secrets');
var pool      =    mysql.createPool({
    // connectionLimit : 10,
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database : DB_NAME,
    debug    :  false
});   
var CRUD = require('mysql-crud');


let customcrud = (table) => {
    return CRUD(pool, table)
}

module.exports = customcrud;
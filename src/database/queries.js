const { DB_NAME } = require('../utils/secrets')

const createDB = `CREATE DATABASE IF NOT EXISTS ${DB_NAME}`;

const dropDB = `DROP DATABASE IF EXISTS ${DB_NAME}`;

const createTableUSers = `
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(50) NULL,
    lastname VARCHAR(50) NULL,
    bio TEXT NULL,
    profilepic TEXT NULL,
    gender VARCHAR(5) NULL,
    gym VARCHAR(50) NULL,
    sportscat VARCHAR(50) NULL,
    country VARCHAR(50) NULL,
    address VARCHAR(50) NULL,
    state VARCHAR(50) NULL,
    city VARCHAR(50) NULL,
    location VARCHAR(50) NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_on TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
)

CREATE TABLE media ( 
    id INT NOT NULL AUTO_INCREMENT , 
    user_id INT NULL , 
    url TEXT NULL , 
    type TEXT NULL , 
    created_at TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
    PRIMARY KEY ('id')) ENGINE = InnoDB;

    CREATE TABLE app ( 
    id BIGINT NOT NULL AUTO_INCREMENT , 
    userid INT NULL , 
    appid TEXT NOT NULL , 
    uip VARCHAR(20) NULL , 
    uproxyip VARCHAR(20) NULL , 
    useragent VARCHAR(100) NULL , 
    location TEXT NULL , 
    status TEXT NULL , 
    devicetoken TEXT NULL , 
    meta TEXT NULL , 
    createdat TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP , 
    updatedat TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
    PRIMARY KEY (id)) ENGINE = InnoDB;
`;

const createNewUser = `
INSERT INTO users VALUES(null, ?, ?, ?, ?, NOW())
`;

const findUserByEmail = `
SELECT * FROM users WHERE email = ?
`;
const updateUserPasswodByEmail = `
UPDATE users 
SET password= ? 
WHERE email = ?
`;
const updateUserInfo = `
UPDATE users 
SET firstname = ?,
lastname = ?,
bio = ?,
profilepic = ?,
gender = ?,
gym = ?,
sportscat = ?,
country = ?,
address = ?,
state = ?,
city = ?,
location = ?
WHERE email = ?
`;
module.exports = {
    createDB,
    dropDB,
    createTableUSers,
    createNewUser,
    findUserByEmail,
    updateUserPasswodByEmail,
    updateUserInfo
};

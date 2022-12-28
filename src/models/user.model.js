const db = require('../config/db.config');
// const mmysql = require('mysql');
const { createNewUser: createNewUserQuery, findUserByEmail: findUserByEmailQuery, updateUserPasswodByEmail:updateUserPasswodByEmail,updateUserInfo:updateUserInfo } = require('../database/queries');
const { logger } = require('../utils/logger');

class User {
    constructor(firstname, lastname, email, password) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    }

    static create(newUser, cb) {
        db.query(createNewUserQuery, 
            [
                newUser.firstname, 
                newUser.lastname, 
                newUser.email, 
                newUser.password
            ], (err, res) => {
                if (err) {
                    logger.error(err.message);
                    cb(err, null);
                    return;
                }
                cb(null, {
                    id: res.insertId,
                    firstname: newUser.firstname,
                    lastname: newUser.lastname,
                    email: newUser.email
                });
        });
    }
    static updatepassword(userdata, cb) {
        db.query(updateUserPasswodByEmail, 
            [
                userdata.password, 
                userdata.email
            ], (err, res) => {
                if (err) {
                    logger.error(err.message);
                    cb(err, null);
                    return;
                }
                cb(null, {
                    id: res,
                    email: userdata.email
                });
        });
    }
    static updateuserdata(userdata, cb) {
        // let demquery = mmysql.format(updateUserInfo, 
        //     [
        //         userdata.firstname, 
        //         userdata.lastname, 
        //         userdata.bio, 
        //         userdata.profilepic, 
        //         userdata.gender, 
        //         userdata.gym, 
        //         userdata.sportscat, 
        //         userdata.country, 
        //         userdata.address, 
        //         userdata.state, 
        //         userdata.city, 
        //         userdata.location, 
        //         userdata.email
        //     ]);
        //     console.log(demquery);
        db.query(updateUserInfo, 
            [
                userdata.firstname, 
                userdata.lastname, 
                userdata.bio, 
                userdata.profilepic, 
                userdata.gender, 
                userdata.gym, 
                userdata.sportscat, 
                userdata.country, 
                userdata.address, 
                userdata.state, 
                userdata.city, 
                userdata.location, 
                userdata.email
            ], (err, res) => {
                if (err) {
                    logger.error(err.message);
                    cb(err, null);
                    return;
                }
                
                // console.log(res)
                cb(null, {
                    id: res,
                    email: userdata.email
                });
        });
    }
    static findByEmail(email, cb) {
        db.query(findUserByEmailQuery, email, (err, res) => {
            if (err) {
                logger.error(err.message);
                cb(err, null);
                return;
            }
            if (res.length) {
                cb(null, res[0]);
                return;
            }
            cb({ kind: "not_found" }, null);
        })
    }
}

module.exports = User;
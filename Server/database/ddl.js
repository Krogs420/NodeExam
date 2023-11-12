import dotenv from "dotenv";
import db from "./Connection.js"
import {encryptPassword} from "../util/encryption.js";
dotenv.config();

const isInDeleteMode = true;

db.execute(`DROP TABLE IF EXISTS kurser;`);
db.execute(`DROP TABLE IF EXISTS indlæg;`);
db.execute(`DROP TABLE IF EXISTS users;`);



db.execute(`CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    mail VARCHAR(500) UNIQUE NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    admin BOOLEAN NOT NULL
);`);

db.execute(`CREATE TABLE IF NOT EXISTS kurser(
    kursus_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    type VARCHAR (255) NOT NULL,
    pris INTEGER NOT NULL,
);`); 

db.execute(`CREATE TABLE IF NOT EXISTS indlæg(
    indlæg_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    type VARCHAR (255) NOT NULL,
    delivery_time INTEGER NOT NULL,
    pris INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
);`); 

if (isInDeleteMode) {
    //users
    db.execute(`INSERT INTO users(mail, user_name, password, admin) VALUES (?, ?, ?, ?);`, [process.env.ADMIN_MAIL, "Minato", await encryptPassword(process.env.ADMIN_PASSWORD), true]);
    db.execute(`INSERT INTO users(mail, user_name, password, admin) VALUES (?, ?, ?, ?);`, [process.env.USER_MAIL, "Sasuke", await encryptPassword(process.env.USER_PASSWORD), false]);
    db.execute(`INSERT INTO users(mail, user_name, password, admin) VALUES (?, ?, ?, ?);`, [process.env.SECOND_USER_MAIL, "Naruto", await encryptPassword(process.env.SECOND_USER_PASSWORD), false]);

}

db.end();
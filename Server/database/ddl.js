import * as dotenv from "dotenv";
dotenv.config();
import db from "./connection.js";
import {encryptPassword} from "../util/encryption.js";

const isInDeleteMode = true;

if (isInDeleteMode) {
    db.execute(`DROP TABLE IF EXISTS users;`);
}

db.execute(`CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    mail VARCHAR(500) UNIQUE NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    admin BOOLEAN NOT NULL
);`);

if (isInDeleteMode) {
    //users
    db.execute(`INSERT INTO users(mail, user_name, password, admin) VALUES (?, ?, ?, ?);`, ["bingo@bongo.com", "Minato", "123", true]);
    db.execute(`INSERT INTO users(mail, user_name, password, admin) VALUES (?, ?, ?, ?);`, ["bingo@bongo.com", "Sasuke", "123", false]);
    db.execute(`INSERT INTO users(mail, user_name, password, admin) VALUES (?, ?, ?, ?);`, ["bingo@bongo.com", "Naruto", "123", false]);

}

db.end()
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

db.execute(`CREATE TABLE IF NOT EXISTS ninjas(
    ninja_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR (255) NOT NULL,
    age INTEGER NOT NULL,
    nation VARCHAR(255) NOT NULL,
    jutsu VARCHAR (255) NOT NULL,
    hokage BOOLEAN NOT NULL,
    user_id INTEGER NOT NULL,
    CONSTRAINT fk_users_ninja FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);`); 

if (isInDeleteMode) {
    //users
    db.execute(`INSERT INTO users(mail, user_name, password, admin) VALUES (?, ?, ?, ?);`, ["bingo@bongo.com", "Minato", "123", true]);
    db.execute(`INSERT INTO users(mail, user_name, password, admin) VALUES (?, ?, ?, ?);`, ["bingo@spongo.com", "Sasuke", "123", false]);
    db.execute(`INSERT INTO users(mail, user_name, password, admin) VALUES (?, ?, ?, ?);`, ["bingo@flongo.com", "Naruto", "123", false]);

    db.execute(`INSERT INTO ninjas(name, age, nation, jutsu, hokage, user_id) VALUE (?, ?, ?, ?, ?, ?);`, ["Zuko", 69, "Fire", "Fireball", false, 1]);

}

db.end();
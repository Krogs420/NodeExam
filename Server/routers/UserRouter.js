import { response, Router } from "express";
import db from "../database/Connection.js"
import bcrypt from "bcrypt";
import {encryptPassword} from "../util/encryption.js";
const router = Router();

router.get("/api/users", async (req, res) => {
    const [rows, fields] = await db.execute(`SELECT * FROM users`)
    res.send(rows);
});

router.get("/api/users/:id", async (req, res) => {
    const id = req.params.id;
    const [rows, fields] = await db.execute(`SELECT * FROM users WHERE id = ?`, [id]);
    console.log(rows)
    res.send({ data: rows});
});

router.post("/api/users", async (req, res) => {
    const user = req.body;
    const saltRounds = 12;
    user.password = await bcrypt.hash(user.password, saltRounds);
    const [rows, fields] = await db.execute(`INSERT INTO users (mail, password, role) VALUES (?, ?, ?);`, [user.mail, user.password, user.role]);
    res.send({ data: rows });
});

router.post("/login", async (req, res) => {
    const {mail, password} = req.body;
    const [rows, fields] = await db.execute(`SELECT * FROM users WHERE mail = ?`, [mail]);
    const encryptedPassword = rows[0].password;
    const compare = await bcrypt.compare(password, encryptedPassword)
    console.log(rows[0].password);
    if (compare) {
        //req.session.isLoggedin = true;
        res.send({ message: "Its a-okay" });
    } else {
        res.send({ message: "Its no good" });
    }
});

router.post("/signup", async (req, res) => {
    const {mail, username, password} = req.body;
    try{
        const [rows, fields] = await db.execute(`INSERT INTO users(mail,user_name,password,admin) VALUES(?, ?, ?, ?);`, [mail, username, await encryptPassword(password), false]);
        res.send({ message: "Its veri nais"});
    } catch {
        res.send({ message: "Its not so veri nais" });
    }
});

router.get("/naruto", async (req, res) => {
    const response = await fetch(`https://naruto-details-proxy.herokuapp.com/clan?name=uzumaki`);
    const data = await response.json();
    console.log(data);
    res.send(data);
});


export default router;
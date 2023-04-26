import { response, Router } from "express";
import db from "../database/Connection.js"
import bcrypt from "bcrypt";
import {encryptPassword} from "../util/encryption.js";
const router = Router();

router.get("/api/users", adminCheck, async (req, res) => {
    try {
        const [users,_] = await db.execute(`SELECT * FROM users`);
        const list = [];
        users.forEach((user) => {
            list.push({id: user.id, username: user.user_name, mail: user.mail, admin: user.admin});
        });
        res.send({ data: list });
    } catch {
        res.status(500).send({ data: undefined, message: "No users were found" });
    }
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
    const compare = await bcrypt.compare(password, encryptedPassword);
    console.log(rows[0].password);
    if (compare) {
        const user = rows[0];
        req.session.admin = user.admin;
        req.session.userid = user.id;
        req.session.isLoggedin = true;
        res.send({ data: {id: user.id, mail: user.mail, username: user.user_name, admin: user.admin }});
    } else {
        res.status(500).send({ message: "Its no good" });
    }
});

router.post("/logout", (req, res) => {
    try {
        req.session.destroy();
        res.send({ message: "You have signed out"});
    } catch {
        res.status().send("There is a server issue");
    }
});

router.post("/signup", async (req, res) => {
    const {mail, username, password} = req.body;
    try{
        const [rows, fields] = await db.execute(`INSERT INTO users(mail,user_name,password,admin) VALUES(?, ?, ?, ?);`, [mail, username, await encryptPassword(password), false]);
        res.send({ message: "Its veri nais" });
    } catch {
        res.send({ message: "Its not so veri nais" });
    }
});

router.post("/creator", loggedinCheck, async ( req, res) => {
    const {name, age, nation, jutsu, hokage} = req.body;
    console.log(req.body)
    console.log(req.session.userid)
    try {
        const [rows, fields] = await db.execute(`INSERT INTO users(name,age,nation,jutsu,hokage,user_id) VALUES(?, ?, ?, ?, ?, ?);`, [name, age, nation, jutsu, hokage, req.session.userid]);
        res.send({ message: "Its veri nais" });
    } catch {
        console.log("Øv")
        res.send({ message: "Its not so veri nais" });
    }
});

router.get("/naruto", async (req, res) => {
    const response = await fetch(`https://naruto-details-proxy.herokuapp.com/clan?name=uzumaki`);
    const data = await response.json();
    console.log(data);
    res.send(data);
});

//Middleware
function adminCheck(req, res, next) {
    if (req.session.admin !== true) {
        // send 401 error
    }
    next();
}

function loggedinCheck(req, res, next) {
    if (req.session.isLoggedin !== true) {
        // send 401 error
    }
    next();
}

export default router;
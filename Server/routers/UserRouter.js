import { response, Router } from "express";
import bcrypt from "bcrypt";
import db from "../database/Connection.js"
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
    const body = req.body;
    const [rows, fields] = await db.execute(`SELECT * FROM users WHERE mail = ?`, [body.mail]);
    const isTrue = await bcrypt.compare(body.password, rows[0].password);
    
    console.log(isTrue);
    if (isTrue) {
        req.session.isLoggedin = true;
        res.send({ message: "Its a-okay" });
    } else {
        res.send({ message: "Its no good" });
    }
});

router.get("/naruto", async (req, res) => {
    const response = await fetch(`https://naruto-details-proxy.herokuapp.com/clan?name=uzumaki`);
    const data = await response.json();
    console.log(data);
    res.send(data);
});


export default router;
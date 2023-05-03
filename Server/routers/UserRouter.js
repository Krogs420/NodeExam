import { Router } from "express";
import db from "../database/Connection.js";
import bcrypt from "bcrypt";
import { encryptPassword } from "../util/encryption.js";
const router = Router();

router.get("/api/users", adminCheck, async (req, res) => {
  try {
    const [users, _] = await db.execute(`SELECT * FROM users`);
    const list = [];
    users.forEach((user) => {
      list.push({
        id: user.id,
        username: user.user_name,
        mail: user.mail,
        admin: user.admin,
      });
    });
    res.send({ data: list });
  } catch {
    res.status(500).send({ data: undefined, message: "No users were found" });
  }
});

router.get("/api/ninjas", async (req, res) => {
  try {
    const [ninjas, _] = await db.execute(`SELECT * FROM ninjas`);
    const list = [];
    ninjas.forEach((ninja) => {
      list.push({
        id: ninja.ninja_id,
        name: ninja.name,
        age: ninja.age,
        nation: ninja.nation,
        jutsu: ninja.jutsu,
        hokage: ninja.hokage,
        userid: ninja.user_id,
      });
    });
    res.send({ data: list });
  } catch {
    res.status(500).send({ data: undefined, message: "No ninjas were found" });
  }
});

router.get("/characters", async (req, res) => {
  const response = await fetch(`https://api.narutodb.xyz/characters?limit=500`);
  const data = await response.json();
  res.send(data);
});

router.get("/clans", adminCheck, async (req, res) => {
  const response = await fetch(`https://api.narutodb.xyz/clan?limit=100`);
  const data = await response.json();
  res.send(data);
});

router.post("/api/users", async (req, res) => {
  const user = req.body;
  const saltRounds = 12;
  user.password = await bcrypt.hash(user.password, saltRounds);
  const [rows, fields] = await db.execute(
    `INSERT INTO users (mail, password, role) VALUES (?, ?, ?);`,
    [user.mail, user.password, user.role]
  );
  res.send({ data: rows });
});

router.post("/login", async (req, res) => {
  const { mail, password } = req.body;
  const [rows, fields] = await db.execute(
    `SELECT * FROM users WHERE mail = ?`,
    [mail]
  );
  const encryptedPassword = rows[0].password;
  const compare = await bcrypt.compare(password, encryptedPassword);
  if (compare) {
    const user = rows[0];
    req.session.admin = !!user.admin;
    req.session.userid = user.id;
    req.session.isLoggedin = true;
    res.send({
      data: {
        id: user.id,
        mail: user.mail,
        username: user.user_name,
        admin: user.admin,
      },
    });
  } else {
    res.status(500).send({ message: "Failed login" });
  }
});

router.post("/signout", (req, res) => {
  try {
    req.session.destroy();
    res.status(200).send("You have successfully signed up");
  } catch {
    res.status(500).send("There is a server issue");
  }
});

router.post("/signup", async (req, res) => {
  const { mail, username, password } = req.body;
  try {
    const [response, _] = await db.execute(
      `INSERT INTO users(mail,user_name,password,admin) VALUES(?, ?, ?, ?);`,
      [mail, username, await encryptPassword(password), false]
    );

    const [users] = await db.execute(`SELECT * FROM users WHERE users.id=?;`, [response.insertId]);

    const io = req.app.get("io");
        users.forEach((user) => {
            list.push({id: user.id, username: user.user_name, mail: user.mail, admin: user.admin});
        });
        io.emit(`users`, users);
    res.status(200).send({ message: "OK" });
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Internal Server Error" + err.message });
  }
});

router.post("/creator", loggedinCheck, async (req, res) => {
  const { name, age, nation, jutsu, hokage } = req.body;
  try {
    const [rows, fields] = await db.execute(
      `INSERT INTO ninjas(name,age,nation,jutsu,hokage,user_id) VALUES(?, ?, ?, ?, ?, ?);`,
      [name, age, nation, jutsu, hokage, req.session.userid]
    );
    res.status(200).send("OK");
  } catch {
    res.status(500).send("Internal Server Error");
  }
});

//Middleware
function adminCheck(req, res, next) {
  if (req.session.admin !== true) {
    res.status(401).send("Authorization");
  }
  next();
}

function loggedinCheck(req, res, next) {
  if (req.session.isLoggedin !== true) {
    res.status(401).send("Login error");
  }
  next();
}

export default router;

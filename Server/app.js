import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import helmet from "helmet";
import session from "express-session";
import { Server } from "socket.io";
import { createServer } from "http";

dotenv.config();
const app = express();
app.use(helmet());
app.use(express.json());
app.use(cors({ credentials: true, origin: true }));
app.use(session({ secret: process.env.SECRET_SESSION, resave: false, saveUninitialized: true, cookie: {secure: false} }));

import ContactRouter from "./routers/ContactRouter.js";
app.use(ContactRouter);

import UserRouter from "./routers/UserRouter.js";
app.use(UserRouter);

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: `http://localhost:5173`,
        credentials: true
    }
});

app.set("io", io);

io.on("connection", (socket) => {
});


const PORT = process.env.PORT || 8082;
const server = httpServer.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});  

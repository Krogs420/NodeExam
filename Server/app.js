import express from "express";
import cors from "cors";
import ContactRouter from "./routers/ContactRouter.js";

const app = express();

app.use(express.json());
app.use(ContactRouter);
app.use(cors)

const PORT = process.env.PORT || 8081;
const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});
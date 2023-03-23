import express from "express";
const app = express();

app.use(express.json());


const PORT = process.env.PORT || 8081;
const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});
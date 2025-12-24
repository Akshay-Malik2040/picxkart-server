const express = require('express');
const { connectDB } = require('./config/database')
const app = express();
require("dotenv").config()

app.use("/", (req, res) => {
    res.send("Hello User")
})

connectDB().then(() => {
    console.log("Database Connected Successfully");
    app.listen(3000, () => {
        console.log("Server is listening on port 3000")
    }) }
)

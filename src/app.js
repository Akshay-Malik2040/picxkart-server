const express = require('express');
const { connectDB } = require('./config/database')
const cors=require('cors');

const PORT=process.env.PORT || 5000;
const app = express();
require("dotenv").config()

app.use(cors);
app.use(express.json());

app.use("/", (req, res) => {
    res.send("Hello User")
})

connectDB().then(() => {
    console.log("Database Connected Successfully");
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`)
    }) }
)

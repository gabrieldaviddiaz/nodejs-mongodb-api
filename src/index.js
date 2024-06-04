const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userroutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use('/api', userroutes);


//routes  
app.get("/", (req, res) => {
    res.send("welcome to my api");
});

//mongo db conection
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("connected to mongoDB Atlas ")).catch((error) => console.error(error));

//mongoose.connect(mongodb+srv://gabrieldaviddiaz2019:<pedrofumapiedra>@cluster0.bqy1vui.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0)

app.listen(port, () => console.log('sever listening on port', port));
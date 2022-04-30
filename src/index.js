//middleware in express
// html & css for static using express
// serving static files in Express

const path = require('path');
const express = require('express');
const app = express();

//console.log(__dirname);

const staticPath = path.join(__dirname,"../public");

//builtin middleware
app.use(express.static(staticPath));



app.get("/",(req, res) => {
    res.send("Hello world from the express");
});

app.get("/about",(req, res) => {
    res.send("Hello world from the about page");
});

app.listen(8000, () =>{
    console.log("listening the port at 8000");
});
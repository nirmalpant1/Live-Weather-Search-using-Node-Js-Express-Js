const express = require('express');
const app = express();
const port =3000;

app.get("/", (req, res) =>{
    res.send("Welcome to my home page");
});

app.get("/about", (req, res) =>{
  //  res.send("Welcome to my about page");
  res.status(200).send('welcome to about page');
});

app.get("/contact", (req, res) =>{
    res.send("Welcome to my contact page");
});

app.get("/temp", (req, res) =>{
    res.send("Welcome to my temp page");
});

app.listen(port, () => {
    console.log(`listening to the port ${port}`);
});

const express = require('express');
const app = express();
const port =3000;

app.get("/", (req, res) =>{
    res.send("Welcome to my home page");
});

app.get("/about", (req, res) =>{
  //  res.send("Welcome to my about page");
  //res.status(200).send('welcome to about page');

  res.write("<h1>welcome to home page</h1>");
  res.write("<h1>welcome to home1 page</h1>");
  res.send();
});

app.get("/contact", (req, res) =>{
    res.send("Welcome to my contact page");
});

//convert to json 
/*
app.get("/temp", (req, res) =>{
    res.send([
        {
        id: 1,
        name: "Nirmal",
        },
        {
            id: 2,
            name: "Yamini",
            },
            {
                id: 3,
                name: "Prema",
                },
                {
                    id: 4,
                    name: "Pinki",
                    },
                    {
                        id: 5,
                        name: "Bhuwan",
                        }
    ]);
});*/

app.get("/temp", (req, res) =>{
    res.json([
        {
        id: 1,
        name: "Nirmal",
        },
        {
            id: 2,
            name: "Yamini",
            },
            {
                id: 3,
                name: "Prema",
                },
                {
                    id: 4,
                    name: "Pinki",
                    },
                    {
                        id: 5,
                        name: "Bhuwan",
                        }
    ]);
});

app.listen(port, () => {
    console.log(`listening to the port ${port}`);
});

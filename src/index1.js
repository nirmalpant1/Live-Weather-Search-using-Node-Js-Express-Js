//Responsive website 
const express = require("express");
const { path } = require("express/lib/application");
const app = express();
const port = 8000;

//builtin middleware

const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

app.get("/", (req, res) =>{
    res.send("Hello from the express server");
});

app.listen(port, () =>{
    console.log(`listening to the port ${port}`);
});
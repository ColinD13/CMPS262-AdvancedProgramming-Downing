const express = require('express');
const path = require("path");
//init
const app = express()
app.use(express.static('public'));

const port = 8006;
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/about', (reg,res) => {
    res.sendFile(path.join(__dirname, "about.html"));
});

app.get('/contact', (reg,res) => {
    res.sendFile(path.join(__dirname, "contact.html"));
});

//start service

app.listen(port, () =>{
    console.log(`Server is running at localhost:${port}`);
});
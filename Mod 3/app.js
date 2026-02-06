const express = require('express');
const path = require("path");
//looked this up about how to edit HTML from the contact.html file, so it does not get routed to a separate HTML file
const fs = require("fs");
//init
const app = express()
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const port = 8006;
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/about', (reg,res) => {
    res.sendFile(path.join(__dirname, "about.html"));
});

app.get('/contact', (reg,res) => {
    const filePath = path.join(__dirname, "contact.html");
    var html = fs.readFileSync(filePath, "utf8");
    html = html.replace("{{MESSAGE}}", "");
    res.send(html);
});

//handle post ofr contact form
app.post('/contact', (reg, res) =>{
    const name = reg.body.name;
    const message = `Thank you ${name} we have recioeved your message!`;

    const filePath = path.join(__dirname, "contact.html");
    // had to look this up
    var html = fs.readFileSync(filePath, "utf8");
    html = html.replace("{{MESSAGE}}", message);
    res.send(html);
})

//start service

app.listen(port, () =>{
    console.log(`Server is running at localhost:${port}`);
});
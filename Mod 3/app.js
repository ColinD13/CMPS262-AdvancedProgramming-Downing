const express = require('express');
//init
const app = express()

const port = 8006;
app.get('/', (req,res) => {
    res.send('Hello it is cold outside');
});

//start service

app.listen(port, () =>{
    console.log(`Server is running at localhost:${port}`);
});
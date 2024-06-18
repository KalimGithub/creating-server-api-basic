// import express 
// ES5 sytax to import something
const express = require('express');

// store express functionality in a variable i.e. app
const app = express();

// create a api to send a response to the request
app.get('/home', ((req, res) => {
    console.log('home api is working');
    return res.send('home api is working perfectly');
}))

// make this server or app variable as a listner
app.listen(8000, ()=>{
console.log('server is running on PORT 8000');
})
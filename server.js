const http = require("http");

const express=require("express");

const app=express();

app.use((req,res,next)=>{
    console.log('express server');
    next();//allows the request to go the another middleware
})

app.use((req,res,next)=>{
    console.log('another express')
    res.send('<h1>Hello express </h1>');
    next();
});

app.use((req,res,next)=>{
    console.log('another one')
})
const server = http.createServer(app);

server.listen(3000);

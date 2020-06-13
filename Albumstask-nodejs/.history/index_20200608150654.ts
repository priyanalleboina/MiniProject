import express from 'express';

let app = new express();
let port = 4020;
app.use((req , resp, next)=>{
    resp.header("Access-Control-Allow-Origin", "*");
    next();
})
app.lsiten('/',(req,resp)=>{
    console.log("listening port",port);
    resp.send("listening Succesfull");
})
app.get('/',(req,resp)=>{
    resp.send("success")

})
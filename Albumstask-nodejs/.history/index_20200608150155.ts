import express from 'express';

var app = new express();

app.get('/',(req,resp)=>{
    resp.send("success")

})
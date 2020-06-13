import * as express from 'express';

const app = new express();
var sql = require('mysql');

var con = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456789",
  database: "mydb",

});
let port = 4020;
app.use((req , resp, next)=>{
    resp.header("Access-Control-Allow-Origin", "*");
    next();
})
app.listen(port,()=>{
    console.log("listening port",port);
})
app.get('/',(req,resp)=>{
    resp.send("success")

})
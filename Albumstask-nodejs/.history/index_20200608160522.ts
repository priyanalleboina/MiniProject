import * as express from 'express';

const app = new express();
import * as mysql from 'mysql2';

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "album",

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
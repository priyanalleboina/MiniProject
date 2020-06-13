import * as express from 'express';

const app = new express();
import * as mysql from 'mysql2';
import * as bodyParser from 'body-parser';

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "album",

});
let port = 4020;
con.connect((err) => {
    if (err) {
      console.log(err)
      console.log('Error connecting to Db');
      return;
    }
    var sql = "CREATE TABLE listalbums (name VARCHAR(255))";  
con.query(sql, function (err, result) {  
if (err) throw err;  
console.log("Table created");  
});  
var alter ="ALTER TABLE listalbums ADD COLUMN ID INT(10)";
con.query(alter, function (err, result) {  
    if (err) throw err;  
    console.log("Table created");  
    });  
});
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

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
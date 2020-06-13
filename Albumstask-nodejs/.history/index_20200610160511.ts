import * as express from 'express';
import * as mysql from 'mysql2';
import * as bodyParser from 'body-parser';
const app = new express();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "album",

});
let port = 4000;
con.connect((err: any) => {
    if (err) {
        console.log(err)
        console.log('Error connecting to Db');
        return;
    }
    // var sql = "CREATE TABLE genre (genre_id INT(10),artist_name VARCHAR(255), profession VARCHAR(255))";
    // con.query(sql, function (err:any, result:any) {
    //     if (err) throw err;
    //     console.log("Table created");
    // });
});
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use((req: any, resp: any, next: any) => {
    resp.header("Access-Control-Allow-Origin", "*");
    next();
})
app.listen(port, () => {
    console.log("listening port", port);
})
app.get('/', (req: any, resp: any) => {
    resp.send("success")

})
app.post('/albums', function (req: any, res: any) {
    var params = {
        album_name: req.body.album_name,
        year: req.body.year
    }
    console.log(params);
    con.query('INSERT INTO albumsdata SET ?', params, (error: any, results: any) => {
        if (error) throw error;
        console.log("result" , results);
        res.send('succesfully added');
    });
});
app.get('/getAlbumsData', function (req: any, res: any) {
    con.query('SELECT * FROM albumsdata',(error: any, results: any) => {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});
app.post('/artistsCreate', function (req: any, res: any) {
    var params = {
        artist_name: req.body.artist_name,
        profession: req.body.profession
    }
    console.log(params);
    con.query('INSERT INTO artistsdata SET ?', params, (error: any, results: any) => {
        if (error) throw error;
        console.log("result" , results);
        res.send('succesfully added');
    });
});
app.get('/getArtistsData', function (req: any, res: any) {
    con.query('SELECT * FROM artistsdata',(error: any, results: any) => {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});
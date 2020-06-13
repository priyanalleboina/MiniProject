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
    // var sql = "CREATE TABLE musicData (music_id INT(10),album_id INT(10),title_id INT(10),artist_id INT(10),genre_id INT(10))";
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

//albums 
app.post('/albumsCreate', function (req: any, res: any) {
    var params = {
        album_name: req.body.album_name,
        year: Number(req.body.year)
    }
    console.log(params);
    con.query('INSERT INTO albumsdata SET ?', params, (error: any, results: any) => {
        if (error) throw error;
        console.log("result" , results);
        res.send({message:'succesfully added'});
    });
});
app.get('/getAlbumsData', function (req: any, res: any) {
    con.query('SELECT * FROM albumsdata',(error: any, results: any) => {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});
//artists
app.post('/artistsCreate', function (req: any, res: any) {
    var params = {
        artist_name: req.body.artist_name,
        profession: req.body.profession
    }
    console.log(params);
    con.query('INSERT INTO artistsdata SET ?', params, (error: any, results: any) => {
        if (error) throw error;
        console.log("result" , results);
        res.send({message:'succesfully added'});
    });
});
app.get('/getArtistsData', function (req: any, res: any) {
    con.query('SELECT * FROM artistsdata',(error: any, results: any) => {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});
//genre
app.post('/genreCreate', function (req: any, res: any) {
    var params = {
        genere_name: req.body.genere_name,
    }
    console.log(params);
    con.query('INSERT INTO genre SET ?', params, (error: any, results: any) => {
        if (error) throw error;
        console.log("result" , results);
        res.send({message:'succesfully added'});
    });
});
app.get('/getGenreData', function (req: any, res: any) {
    con.query('SELECT * FROM genre',(error: any, results: any) => {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
    
});
//titles
app.post('/titleCreate', function (req: any, res: any) {
    var params = {
        title_name: req.body.title_name,
    }
    console.log(params);
    con.query('INSERT INTO titledata SET ?', params, (error: any, results: any) => {
        if (error) throw error;
        console.log("result" , results);
        res.send({message:'succesfully added'});
    });
});
app.get('/getTitlesData', function (req: any, res: any) {
    con.query('SELECT * FROM titledata',(error: any, results: any) => {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
    
});

//musicalbum

app.post('/musicalbumsDataCreate', function (req: any, res: any) {
    var params = {
        title_id: req.body.title_id,
        album_id: req.body.album_id,
        artist_id:req.body.artist_id,
        genre_id:req.body.genre_id
    }
    console.log(params);
    con.query('INSERT INTO musicdata SET ?', params, (error: any, results: any) => {
        if (error) throw error;
        console.log("result" , results);
        res.send({message:'succesfully added'});
    });
});

//getbyalbumid

app.get('/getByAlbumId', function (req: any, res: any) {
    // const album_id:any = req.query.album_id
    con.query('select  titledata.title_id, titledata.title_name,artistsdata.artist_name,artistsdata.profession,genre.genre_id,genre.genere_namefrom titledata,artistsdata,genre where(title_id,artist_id,genre_id) =any (select title_id,artist_id,genre_id from musicdata where album_id = 1)',(error: any, results: any) => {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
    
});
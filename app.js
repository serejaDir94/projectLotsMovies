const express = require ('express');
const mysql = require ('mysql');
const cors = require ('cors');


const srv = express();
srv.use(cors());

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lotsMovies',

});

conn.connect(err => {
    if(err){
        console.log('err');
    } else {
        console.log('DB connect');
    }
})

srv.listen(8000, () => {
  console.log("app started");
})

let dbData;
conn.query(`SELECT * FROM lotsMoviesTable`, (err, result, field) => {
    dbData = result
})

srv.get('/', (req, res) => {
    res.send(dbData);
  })

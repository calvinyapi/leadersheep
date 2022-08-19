const { Pool, Client } = require('pg');
const express = require('express');
const app = express();

const pool = new Pool({
  user: 'izjuxkkxxdkalz',
  host: 'ec2-52-51-3-22.eu-west-1.compute.amazonaws.com',
  database: 'd4l1m7v7u5orff',
  password: '3b39bbccfb4537656523e47cba5857c24db0906074f2222c050a044a4caadb28',
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
}
})

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get('/product', (req, res) => {
    pool.query('select * from product', (err, result) =>{
       console.log(err, res);
       res.send(result.rows);
       pool.end;
    });
});


app.listen(5432, () => {
    console.log("Sever is now listening at port");
});
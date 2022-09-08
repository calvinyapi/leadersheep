const { Pool, Client } = require('pg');
const express = require('express');
const app = express();
let customer = require('../models/customer');

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
const { query } = require('express');
app.use(bodyParser.json());

app.get('/product', (req, res) => {
    pool.query('select * from product', (err, result) =>{
       console.log(err, res);
       res.send(result.rows);
       pool.end;
    });
});

app.get('/status', (req, res) => {
    pool.query('select * from status', (err, result) =>{
        console.log(err, res);
        res.send(result.rows);
        pool.end;
    });
});

app.get('/customer', (req, res) => {
     pool.query('select * from customer', (err, result) => {
            console.log(err, res);
            res.send(result.rows);
            pool.end
        });
});

app.get('/auth', (req, res)=>{
   const sql = pool.query('select * from users where mail = ' + mail)
});

app.listen(5432, () => {
    console.log("Sever is now listening at port");
});

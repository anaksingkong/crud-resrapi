'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./src/routers/buku.routers');

const port = 3000;

// Allow origin
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Method', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type, Authorization');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

router(app);

app.listen(port, ()=>{
    console.log(`server berjalan pada port ${port}`);
});

'use strict';
const connection = require('../models/connection');
const response = require('../resp/res');

exports.index = async (req, res)=>{
    res.json({nama: "wowow", age: 23});
};

exports.displayAllBooks = async (req, res)=>{
    await connection.query('SELECT * FROM books', (error, rows)=>{
        if (error) {
            console.log(error)
        } else {
            response.valid(rows, res);
        }
    });
};

exports.bookDetails = async(req, res)=>{
    await connection.query('SELECT buku_id, judul_buku, deskripsi FROM books', (error, rows)=>{
        if (error) {
            console.log(error)
        } else {
            response.valid(rows, res);
        }
    });
};

exports.categoryBooks = async(req, res)=>{
    connection.query('SELECT categories.category_name, books.judul_buku, books.stock FROM books JOIN categories WHERE books.category_id=categories.id_category ORDER BY books.category_id ', (error, rows)=>{
        if (error) {
            console.log(error)
        } else {
            response.valid(rows, res);
        }
    });
};

exports.insertBooks = async(req, res)=>{
    const buku_id = req.body.buku_id;
    const judul_buku = req.body.judul_buku;
    const stock = req.body.stock;
    const image = req.body.image;
    const deskripsi = req.body.deskripsi;
    const category_id = req.body.category_id;

    await connection.query('INSERT INTO books (buku_id, judul_buku, stock, image, deskripsi, category_id) VALUES (?,?,?,?,?,?)', 
    [buku_id, judul_buku, stock, image, deskripsi, category_id], 
    (error, rows)=>{
        if (error) {
            console.log(error)
        } else {
            response.valid("Data berhasil ditambah!", res);
        }
    });
};

exports.addCategory = async(req, res)=>{
    const id_category = req.body.id_category;
    const category_name = req.body.category_name;

    await connection.query('INSERT INTO categories (id_category, category_name) VALUES (?,?)', 
    [id_category, category_name], (error, rows)=>{
        if (error) {
            console.log(error)
        } else {
            response.valid("Berhasil menambahka kategori", res);
        }
    });
};
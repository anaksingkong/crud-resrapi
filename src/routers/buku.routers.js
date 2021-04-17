'use strict';

const router = require('express').Router()

module.exports = async (app)=>{
    const values = require('../controllers/buku.controllers');


    // memanggil router index
    router.get('/')
        .get(values.index);

    // memanggil displayAllBooks
    router.get('/get-all-books', values.displayAllBooks);

    router.get('/books-details', values.bookDetails);

    router.get('/category-books', values.categoryBooks);

    router.post('/add-books', values.insertBooks);

    router.post('/add-category', values.addCategory);


    app.use('/api/v1', router)
};
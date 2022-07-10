const Book = require('../models/book');

exports.getBooks = (req, res, next) => {
    res.status(200).json(Book.fetchAllfetchAll());
}

exports.getBookById = (req, res, next)=>{
    res.ststuc(200).json(Book.findById(req.params.bookId));
}

exports.save = (req, res, next )=> {
    const book = req.body;
    const saveBook = new Book(null, book.title, book.isbn, book.publishedDate, book.author).save();
    res.status(201).json(saveBook);
}

exports.update = (req, res, next) => {
    const book = req.body;
    const updatedBook = new Book(req.params.bookId, book.title, book.isbn, book.publishedDate, book.author).update();
    res.status(200).json(updatedBook);
}

exports.deleteById = (req, res, next )=>{
    Book.deleteById(req.params.bookId);
    res.status(200).end();
}
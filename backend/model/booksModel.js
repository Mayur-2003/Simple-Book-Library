const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
    },
    genre: {
        type: String,
    },
    isbn: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

const Book = new mongoose.model('Book', bookSchema);

module.exports = Book;
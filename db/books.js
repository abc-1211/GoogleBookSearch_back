const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BooksSchema = new Schema({
    title: {
        type: String
    },
    infoLink: {
        type: String
    },
    authors: {
        type: Array
    },
    description: {
        type: String
    },
    imageLinks: {
        type: Object
    }
});

const Books = mongoose.model("Books", BooksSchema);

module.exports = Books;
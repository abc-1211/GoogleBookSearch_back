const Books = require("../db/books");

module.exports = {
    getBooks: (req, res) => {
        Books.find({}, (err, books) => {
            if (err) {
                res.json(err);
            } else {
                res.json(books);
            }
        })
    },
    saveBook: (req, res) => {
        const data = req.body;
        const newBook = new Books(data);
        newBook.save((err) => {
            if (err) {
                res.json({
                    msgBody: "Failed To Save"
                });
            } else {
                res.status(201).json({
                    msgBody: "Successfully Saved"
                });
            };
        });
    },
    deleteSaved: (req, res) => {
        const _id = req.params.id ;
        console.log(_id)
        Books.deleteOne({ _id }, err => {
            if (err) {
                res.json({
                    msgBody: "Failed To Delete"
                });
            } else {
                res.status(201).json({
                    msgBody: "Successfully Deleted",
                    reload: true
                });
            };
        })
    }
}
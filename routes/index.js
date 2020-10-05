const router = require("express").Router();
const booksController = require("../controllers/books");

router.use("/getbooks", booksController.getBooks);
router.use("/savebook", booksController.saveBook);
router.use("/deletesaved/:id", booksController.deleteSaved);


module.exports = router;
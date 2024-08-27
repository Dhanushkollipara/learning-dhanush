const express = require("express");
const router = express.Router();
const booksController = require("../controllers/books");

router.post("/", booksController.createBook);
router.get("/", booksController.getBooksWithAuthors);


module.exports = router;
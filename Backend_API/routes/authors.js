var express = require("express");
var router = express.Router();
const {body} = require("express-validator");
const authorsController = require('../controllers/authors')

router.post("/",[
        body("first_name")
            .isLength({min:3})
            .withMessage("Min length should be 3"),
        body("last_name")
            .isLength({max:20})
            .withMessage("max length can't be exceed 20"),
    authorsController.createAuthors,]);


router.get('/',authorsController.index);

router.get("/login",authorsController.getAuthors)

router.delete("/:id",authorsController.deleteAuthor)

router.put("/:id",authorsController.editAuthor)

module.exports = router;
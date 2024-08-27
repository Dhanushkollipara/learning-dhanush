var express = require('express');
var router = express.Router();
const productsController = require('../controllers/products')


router.get('/', productsController.index);
router.get('/:Id', productsController.index_id);
router.get('/productsearchbyName/:name', productsController.index_name);
router.get('/productsearchbyPrice/:price', productsController.index_price);
router.get('/productsearchbyAvailability/:availability', productsController.index_availability);
router.post("/", productsController.createProduct);
router.put("/:Id", productsController.editAllProduct);
router.patch("/:Id", productsController.editProduct);
router.delete("/:Id", productsController.deleteProduct); 



module.exports = router;

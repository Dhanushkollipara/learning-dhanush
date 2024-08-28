const express = require('express');
const router = express.Router();
const productsController = require('../controllers/Products');

// Get all products
router.get('/', productsController.getAllProducts);

// Get product by ID
router.get('/:id', productsController.getProductById);

// Search products by name
router.get('/search-by-name/:name', productsController.getProductsByName);

// Search products by price
router.get('/search-by-price/:price', productsController.getProductsByPrice);

// Search products by availability
router.get('/search-by-availability/:availability', productsController.getProductsByAvailability);

// Create a new product
router.post('/', productsController.createProduct);

// Update a product by ID
router.put('/:id', productsController.updateProduct);

// Partial update a product by ID
router.patch('/:id', productsController.updateProduct);

// Delete a product by ID
router.delete('/:id', productsController.deleteProduct);

module.exports = router;

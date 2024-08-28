const Product = require('../models/Products');

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ status: 'error', message: err.message });
    }
};

// Get product by ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get products by name
exports.getProductsByName = async (req, res) => {
    try {
        const products = await Product.find({ name: req.params.name });
        if (products.length === 0) {
            return res.status(404).json({ message: 'No products found with the given name' });
        }
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get products by availability
exports.getProductsByAvailability = async (req, res) => {
    try {
        const products = await Product.find({ availability: req.params.availability });
        if (products.length === 0) {
            return res.status(404).json({ message: 'No products found with the given availability' });
        }
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get products by price
exports.getProductsByPrice = async (req, res) => {
    try {
        const products = await Product.find({ price: { $gt: req.params.price } });
        if (products.length === 0) {
            return res.status(404).json({ message: 'No products found with the given price' });
        }
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new product
exports.createProduct = async (req, res) => {
    const { name, price, availability } = req.body;

    const newProduct = new Product({
        name,
        price,
        availability,
    });

    try {
        await newProduct.save();
        res.json(newProduct);
    } catch (err) {
        res.status(500).send('Unable to create product');
    }
};

// Update a product by ID
exports.updateProduct = async (req, res) => {
    const { name, price, availability } = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { name, price, availability },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

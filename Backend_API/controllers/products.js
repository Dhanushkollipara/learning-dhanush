const Product = require("../models/products")


exports.index = async function(req, res, next) {
    try {
        const productList = await Product.find()
        res.json(productList);
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
  }


exports.index_id = async function(req, res) {
        try {
          const product = await Product.findById(req.params.Id);
          if (!product) {
            return res.status(404).json({ message: 'Product not found' });
          }
          res.json(product);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
}

exports.index_name = async function(req, res) {
        try {
          const product = await Product.find({name: req.params.name});
          if (!product) {
            return res.status(404).json({ message: 'Product not found' });
          }
          res.json(product);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
}

exports.index_availability = async function(req, res) {
        try {
          const product = await Product.find({availability: req.params.availability});
          if (!product) {
            return res.status(404).json({ message: 'Product not found' });
          }
          res.json(product);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
}

exports.index_price = async function(req, res) {
        try {
          const product = await Product.find({price: { $gt : req.params.price}});
          if (!product) {
            return res.status(404).json({ message: 'Product not found' });
          }
          res.json(product);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
}

exports.createProduct = async function (req, res, next) {
    let name = req.body.name;
    let price = req.body.price;
    let availability = req.body.availability;

    const productOb = new Product({
        name,
        price,
        availability
    });

    try {
        await productOb.save();
        res.json(productOb);
    } catch (err) {
        res.status(500).send("Unable to create Product");
    }
};


exports.editAllProduct = async function(req, res) {
    try {
      const { name,price,availability } = req.body;  
      const updatedProduct = await Product.findByIdAndUpdate(req.params.Id, {
        name,price,availability
      }, { new: true });
  
      if (!updatedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }


exports.editProduct = async function(req, res) {
    try {
      const { name,price,availability } = req.body;  
      const updatedProduct = await Product.findByIdAndUpdate(req.params.Id, {
        name,price,availability
      }, { new: true });
  
      if (!updatedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  exports.deleteProduct = async function(req, res) {
    try {
      const deletedProduct = await Product.findByIdAndDelete(req.params.Id);
  
      if (!deletedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import { searchProductByName, searchProductByPrice, searchProductByAvailability, getProducts, deleteProduct } from '../api';
import { TextField, Box, Button, Grid } from '@mui/material';
import Loader from '../components/Loader';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [availability, setAvailability] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    let response;

    if (name) {
      response = await searchProductByName(name);
    } else if (price) {
      response = await searchProductByPrice(price);
    } else if (availability) {
      response = await searchProductByAvailability(availability);
    } else {
      response = await getProducts();
    }

    setProducts(response.data);
    setLoading(false);
  };

  const handleSearch = () => {
    fetchProducts();
  };

  const handleDeleteProduct = async (productId) => {
      console.log(productId)
    try {
      await deleteProduct(productId);
      // Remove the deleted product from the state
      setProducts(products.filter(product => product._id !== productId));
    } catch (error) {
      console.error('Failed to delete product:', error);
    }
  };

  return (
    <Box>
      <h2>Product List</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Search by Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Search by Price"
            variant="outlined"
            fullWidth
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Search by Availability"
            variant="outlined"
            fullWidth
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
          />
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" onClick={handleSearch} sx={{ marginTop: 2 }}>
        Search
      </Button>
      {loading ? <Loader /> : (
        <ProductList products={products} onDelete={handleDeleteProduct} />
      )}
    </Box>
  );
};

export default Home;

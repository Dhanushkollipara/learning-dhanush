import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  TextField, Button, Box, MenuItem,
} from '@mui/material';
import {
  searchProductByName, searchProductByPrice, searchProductByAvailability,
} from '../api';
import ProductList from './ProductList';

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('name');
  const [products, setProducts] = useState([]);

  const handleSearch = async () => {
    let searchFunction;

    switch (searchType) {
      case 'name':
        searchFunction = searchProductByName;
        break;
      case 'price':
        searchFunction = searchProductByPrice;
        break;
      case 'availability':
        searchFunction = searchProductByAvailability;
        break;
      default:
        return;
    }

    try {
      const response = await searchFunction(searchTerm);
      setProducts(response.data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  return (
    <Box sx={{ mt: 2 }}>
      <TextField
        fullWidth
        id="searchTerm"
        name="searchTerm"
        label="Search Term"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        select
        id="searchType"
        name="searchType"
        label="Search By"
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
        margin="normal"
      >
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="price">Price</MenuItem>
        <MenuItem value="availability">Availability</MenuItem>
      </TextField>
      <Button
        color="primary"
        variant="contained"
        fullWidth
        onClick={handleSearch}
        sx={{ mt: 2 }}
      >
        Search
      </Button>
      <ProductList products={products} />
    </Box>
  );
};

ProductSearch.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    availability: PropTypes.string,
  })),
};

export default ProductSearch;

import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { searchProductByName, searchProductByPrice, searchProductByAvailability } from '../api';
import ProductList from './ProductList';

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('name');
  const [products, setProducts] = useState([]);

  const handleSearch = () => {
    let searchFunction;

    if (searchType === 'name') {
      searchFunction = searchProductByName;
    } else if (searchType === 'price') {
      searchFunction = searchProductByPrice;
    } else {
      searchFunction = searchProductByAvailability;
    }

    searchFunction(searchTerm).then((response) => {
      setProducts(response.data);
    });
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
        <option value="name">Name</option>
        <option value="price">Price</option>
        <option value="availability">Availability</option>
      </TextField>
      <Button color="primary" variant="contained" fullWidth onClick={handleSearch} sx={{ mt: 2 }}>
        Search
      </Button>
      <ProductList products={products} />
    </Box>
  );
};

export default ProductSearch;

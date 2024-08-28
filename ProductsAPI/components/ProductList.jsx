import React from 'react';
import PropTypes from 'prop-types';
import {
  List, ListItem, ListItemText, IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const ProductList = ({ products, onDelete }) => {
  const navigate = useNavigate();

  const handleEdit = (productId) => {
    navigate(`/${productId}`);
  };

  const handleDelete = async (productId) => {
    const confirmation = window.confirm('Are you sure you want to delete this product?');
    if (confirmation) {
      try {
        await onDelete(productId);
      } catch (error) {
        console.error('Failed to delete product:', error);
      }
    }
  };

  return (
    <List>
      {products.map((product) => (
        <ListItem key={product._id}>
          <ListItemText
            primary={product.name}
            secondary={`Price: ₹${product.price}`}
          />
          <ListItemText primary={product.availability} />
          <IconButton
            edge="end"
            aria-label="edit"
            onClick={() => handleEdit(product._id)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => handleDelete(product._id)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    availability: PropTypes.string.isRequired,
  })).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ProductList;

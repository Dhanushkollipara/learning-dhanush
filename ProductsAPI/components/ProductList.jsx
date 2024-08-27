import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const ProductList = ({ products, onDelete }) => {
  const navigate = useNavigate();

  const handleEdit = (productId) => {
    navigate(`/${productId}`);
  };

  const handleDelete = async (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await onDelete(productId);
        // Optionally handle state update here if not using parent state management
      } catch (error) {
        console.error('Failed to delete product:', error);
      }
    }
  };

  return (
    <List>
      {products.map((product) => (
        <ListItem key={product._id}>
          <ListItemText primary={product.name} secondary={`Price: $${product.price}`} />
          <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(product._id)}>
            <EditIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(product._id)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ProductList;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductForm from '../components/ProductForm';

const AddProduct = () => {
  const navigate = useNavigate();

  const handleProductAdded = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <ProductForm
        initialValues={{ name: '', price: 0, availability: 'available' }}
        isEditMode={false}
        onSubmit={handleProductAdded}
      />
    </div>
  );
};

export default AddProduct;

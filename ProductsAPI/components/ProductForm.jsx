import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  TextField, Button, Box, MenuItem,
} from '@mui/material';
import { createProduct, updateProduct } from '../api';

const validationSchema = Yup.object({
  name: Yup.string().required('Product name is required'),
  price: Yup.number()
    .required('Price is required')
    .positive('Price must be positive'),
  availability: Yup.string().required('Availability is required'),
});

const ProductForm = ({ initialValues, isEditMode, productId }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        if (isEditMode) {
          await updateProduct(productId, values);
          alert('Product updated successfully');
        } else {
          await createProduct(values);
          alert('Product created successfully');
        }
      } catch (error) {
        console.error('Failed to submit product', error);
      }
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ mt: 2 }}
    >
      <TextField
        fullWidth
        id="name"
        name="name"
        label="Product Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        margin="normal"
      />
      <TextField
        fullWidth
        id="price"
        name="price"
        label="Price"
        type="number"
        value={formik.values.price}
        onChange={formik.handleChange}
        error={formik.touched.price && Boolean(formik.errors.price)}
        helperText={formik.touched.price && formik.errors.price}
        margin="normal"
      />
      <TextField
        fullWidth
        select
        id="availability"
        name="availability"
        label="Availability"
        value={formik.values.availability}
        onChange={formik.handleChange}
        error={formik.touched.availability && Boolean(formik.errors.availability)}
        helperText={formik.touched.availability && formik.errors.availability}
        margin="normal"
      >
        <MenuItem value="available">Available</MenuItem>
        <MenuItem value="not available">Not Available</MenuItem>
      </TextField>
      <Button
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
        sx={{ mt: 2 }}
      >
        {isEditMode ? 'Update Product' : 'Create Product'}
      </Button>
    </Box>
  );
};

ProductForm.propTypes = {
  initialValues: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    availability: PropTypes.string,
  }).isRequired,
  isEditMode: PropTypes.bool.isRequired,
  productId: PropTypes.string.isRequired,
};

export default ProductForm;

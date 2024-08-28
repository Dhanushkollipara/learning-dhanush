import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api';
import ProductForm from '../components/ProductForm';
import Loader from '../components/Loader';

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(id);
        setProduct(response.data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h2>Edit Product</h2>
      <ProductForm
        initialValues={product}
        isEditMode
        productId={id}
      />
    </div>
  );
};

export default EditProduct;

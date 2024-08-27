import React, { useEffect, useState } from 'react';
import { getProductById } from '../api';
import ProductForm from '../components/ProductForm';
import Loader from '../components/Loader';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id).then((response) => {
      setProduct(response.data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <Loader />;

  return (
    <div>
      <h2>Edit Product</h2>
      <ProductForm initialValues={product} isEditMode={true} productId={id} />
    </div>
  );
};

export default EditProduct;

import axios from 'axios';

const API_BASE_URL = 'products';

export const getProducts = () => axios.get(`${API_BASE_URL}`);
export const getProductById = (id) => axios.get(`${API_BASE_URL}/${id}`);
export const searchProductByName = (name) => axios.get(`${API_BASE_URL}/productsearchbyName/${name}`);
export const searchProductByPrice = (price) => axios.get(`${API_BASE_URL}/productsearchbyPrice/${price}`);
export const searchProductByAvailability = (availability) => axios.get(`${API_BASE_URL}/productsearchbyAvailability/${availability}`);
export const createProduct = (productData) => axios.post(API_BASE_URL, productData);
export const editProduct = (id, productData) => axios.put(`${API_BASE_URL}/${id}`, productData);
export const patchProduct = (id, productData) => axios.patch(`${API_BASE_URL}/${id}`, productData);
export const deleteProduct = (id) => axios.delete(`${API_BASE_URL}/${id}`);

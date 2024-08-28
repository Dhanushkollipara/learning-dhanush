import axios from 'axios';

const API_BASE_URL = '/products';

export const getProducts = () => axios.get(API_BASE_URL);

export const getProductById = (id) => axios.get(`${API_BASE_URL}/${id}`);

export const searchProductByName = (name) => axios.get(`${API_BASE_URL}/search-by-name/${name}`);

export const searchProductByPrice = (price) => axios.get(`${API_BASE_URL}/search-by-price/${price}`);

export const searchProductByAvailability = (availability) => axios.get(`${API_BASE_URL}/search-by-availability/${availability}`);

export const createProduct = (productData) => axios.post(API_BASE_URL, productData);

export const updateProduct = (id, productData) => axios.put(`${API_BASE_URL}/${id}`, productData);

export const partialUpdateProduct = (id, productData) => axios.patch(`${API_BASE_URL}/${id}`, productData);

export const deleteProduct = (id) => axios.delete(`${API_BASE_URL}/${id}`);

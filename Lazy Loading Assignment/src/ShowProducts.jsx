import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField, Paper, Typography, Grid, Box } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const validationSchema = Yup.object({
    name: Yup.string()
        .required('Name is required')
        .min(3, 'Name must be at least 3 characters long')
        .max(50, 'Name cannot be longer than 50 characters'),
    price: Yup.number()
        .required('Price is required')
        .min(0, 'Price cannot be negative')
});

const FormContainer = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    boxShadow: theme.shadows[5],
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
}));

const ErrorText = styled(Typography)(({ theme }) => ({
    color: theme.palette.error.main,
}));

const ExpandedComponent = ({ data }) => (
    <Box padding={2} bgcolor="#f5f5f5">
        <Typography variant="body2"><strong>Description:</strong> {data.excerpt || 'N/A'}</Typography>
        <Typography variant="body2"><strong>Stock:</strong> {data.stock || 'N/A'}</Typography>
    </Box>
);

const ShowProducts = () => {
    const [products, setProducts] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/products")
            .then((res) => {
                if (res.data.ok && Array.isArray(res.data.products)) {
                    setProducts(res.data.products);
                } else {
                    console.error("Unexpected API response format:", res.data);
                    setProducts([]);
                }
            })
            .catch((err) => {
                console.error("API call failed:", err);
                setProducts([]);
            });
    }, []);

    const handleSubmit = (values, { resetForm }) => {
        axios.post("http://localhost:3000/api/v1/products", values)
            .then((res) => {
                if (res.data) {
                    setProducts(prevProducts => [...prevProducts, res.data]);
                }
                resetForm();
                setShowForm(false);
            })
            .catch((err) => console.error("Failed to add product:", err));
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Price',
            selector: row => `$${row.price}`,
            sortable: true,
        }
    ];

    const data = filteredProducts.map(product => ({
        id: product._id,
        name: product.name,
        price: product.price,
        excerpt: product.excerpt,
        stock: product.stock
    }));

    return (
        <Box padding={3}>
            <Typography variant="h4" gutterBottom>
                Products Management
            </Typography>

            <TextField
                label="Search"
                variant="outlined"
                fullWidth
                margin="normal"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Enter product name"
            />

            <FormContainer>
                <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    highlightOnHover
                    selectableRows
                    expandableRows
                    expandableRowsComponent={ExpandedComponent}
                    paginationPerPage={5}
                />
            </FormContainer>

            <Button
                variant="contained"
                color="secondary"
                style={{ marginBottom: '20px' }}
                onClick={() => navigate('/addProducts')} 
            >
                Add Product
            </Button>

            {showForm && (
                <FormContainer>
                    <Formik
                        initialValues={{ name: '', price: '', code: '', excerpt: '' }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <SectionTitle variant="h6">
                                    Add New Product
                                </SectionTitle>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            as={TextField}
                                            name="name"
                                            label="Name"
                                            fullWidth
                                            variant="outlined"
                                            error={touched.name && Boolean(errors.name)}
                                            helperText={<ErrorMessage name="name" />}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            as={TextField}
                                            name="code"
                                            label="Code"
                                            fullWidth
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            as={TextField}
                                            name="price"
                                            label="Price"
                                            type="number"
                                            fullWidth
                                            variant="outlined"
                                            error={touched.price && Boolean(errors.price)}
                                            helperText={<ErrorMessage name="price" />}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            as={TextField}
                                            name="excerpt"
                                            label="Description"
                                            fullWidth
                                            variant="outlined"
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    style={{ marginTop: '20px' }}
                                >
                                    Add Product
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </FormContainer>
            )}
        </Box>
    );
};

export default ShowProducts;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  Container,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Box,
  Alert
} from '@mui/material';

const EditUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzIzNzg2MTA0LCJleHAiOjE3MjYzNzgxMDR9.eSHyOzkjpyD8svktFK8r4arc28r9FOOx8EgvrKM7Z4o";
      try {
        const response = await axios.get('http://localhost:1337/api/users/3', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error('There was an error fetching the user data!', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const validationSchema = Yup.object({
    currentPassword: Yup.string().required('Current password is required'),
    newPassword: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/\d/, 'Password must contain at least one number')
      .matches(/[@$!%*?&#]/, 'Password must contain at least one special character')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

  const handleSubmit = async (values) => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzIzNzg2MTA0LCJleHAiOjE3MjYzNzgxMDR9.eSHyOzkjpyD8svktFK8r4arc28r9FOOx8EgvrKM7Z4o";
    
    try {
      const response = await axios.post(
        'http://localhost:1337/api/auth/change-password',
        {
          currentPassword: values.currentPassword,
          password: values.newPassword,
          passwordConfirmation: values.confirmPassword,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSuccess('Password updated successfully');
      setError('');
    } catch (error) {
      setError(error.response?.data?.error?.message || 'An error occurred');
      setSuccess('');
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Edit User
        </Typography>
        <Formik
          initialValues={{
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleBlur, values }) => (
            <Form>
              <Box sx={{ mb: 2 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Username"
                  value={user.username}
                  disabled
                />
              </Box>

              <Box sx={{ mb: 2 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Current Password"
                  type="password"
                  name="currentPassword"
                  value={values.currentPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={<ErrorMessage name="currentPassword" />}
                />
              </Box>

              <Box sx={{ mb: 2 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Enter New Password"
                  type="password"
                  name="newPassword"
                  value={values.newPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={<ErrorMessage name="newPassword" />}
                />
              </Box>

              <Box sx={{ mb: 2 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Re-Enter New Password"
                  type="password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={<ErrorMessage name="confirmPassword" />}
                />
              </Box>

              <Button type="submit" variant="contained" color="primary" fullWidth>
                Update Password
              </Button>
              {success && (
                <Box sx={{ mt: 2 }}>
                  <Alert severity="success">{success}</Alert>
                </Box>
              )}
              {error && (
                <Box sx={{ mt: 2 }}>
                  <Alert severity="error">{error}</Alert>
                </Box>
              )}
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default EditUser;

import React from 'react';
import { Container, Typography } from '@mui/material';
import RestaurantList from './RestaurantList';
import RestaurantForm from './RestaurantForm';

const AdminPage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Restaurant Admin
      </Typography>
      <RestaurantList />
      
    </Container>
  );
};

export default AdminPage;
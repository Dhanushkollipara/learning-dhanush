import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Box, Container } from '@mui/material';

const HomePage = () => {
  return (
    <Container 
      maxWidth="sm" 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh' 
      }}
    >
      <Typography variant="h4" gutterBottom align="center">
        Welcome to the Home Page!
      </Typography>
      <Typography variant="body1" paragraph align="center">
        This Page is all about the Restaurant Store.
      </Typography>
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: 2 
        }}
      >
       
      </Box>
    </Container>
  );
};

export default HomePage;
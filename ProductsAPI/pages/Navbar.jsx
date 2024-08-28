import React from 'react';
import {
  AppBar, Toolbar, Typography, Button, Box,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
      >
        Product Manager
      </Typography>
      <Box>
        <Button
          color="inherit"
          component={Link}
          to="/"
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/add-product"
        >
          Add Product
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar;

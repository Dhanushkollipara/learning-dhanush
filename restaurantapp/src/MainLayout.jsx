import React, { useState } from 'react';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import HomePage from "./Homepage"
import { Routes, Route } from 'react-router-dom';
import ViewUser from './ViewUser';
import EditUser from './EditUser';

const MainLayout = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="App">
      <IconButton
        onClick={handleClick}
        sx={{
          position: 'absolute',
          top: 20,
          right: 20,
          height: 50,
          width: 50,
          border: '2px solid black',
          backgroundColor: 'lightskyblue',
          borderRadius: '50%',
          overflow: 'hidden',
        }}
      >
        <AccountCircleIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: '10px',
            width: 200,
            mt: 0.2,
            p: 2,
          },
        }}
      >
        <Typography variant="h6" align="center">
          Hi User,<br />
          <span style={{ fontSize: '12px', fontWeight: '400' }}>Welcome back!</span>
        </Typography>
        <MenuItem onClick={handleClose}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Home
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
            My Profile
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/editProfile" style={{ textDecoration: 'none', color: 'inherit' }}>
            Edit Profile
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/logout" style={{ textDecoration: 'none', color: 'inherit' }}>
            Logout
          </Link>
        </MenuItem>
      </Menu>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ViewUser />} />
        <Route path="/editProfile" element={<EditUser />} />
      </Routes>
    </div>
  );
};

export default MainLayout;






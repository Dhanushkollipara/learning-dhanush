// // import React from 'react';
// // import logo from './logo.svg';
// // import './App.css';

// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import ViewUser from './ViewUser';

// // function App() {
// //   return (
// //     <div className="App">
// //       <Router>
// //         <Routes>
// //           <Route path='/' element={<ViewUser />} />
// //         </Routes>
// //       </Router>
// //     </div>
// //   );
// // }

// // export default App;







// import React, {useState} from 'react';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
// import { Container, Box, Button } from '@mui/material';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import ViewUser from './ViewUser';  
// import EditUser from './EditUser';

// function App() {
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <IconButton
//           onClick={handleClick}
//           sx={{
//             position: 'absolute',
//             top: 20,
//             right: 20,
//             height: 50,
//             width: 50,
//             border: '2px solid black',
//             backgroundColor: 'lightskyblue',
//             borderRadius: '50%',
//             overflow: 'hidden',
//           }}
//         >
//           <AccountCircleIcon sx={{ fontSize: 40 }} />
//         </IconButton>
//         <Menu
//           anchorEl={anchorEl}
//           open={Boolean(anchorEl)}
//           onClose={handleClose}
//           PaperProps={{
//             sx: {
//               borderRadius: '10px',
//               width: 200,
//               mt: 2,
//               p: 2,
//             },
//           }}
//         >
//           <Typography variant="h6" align="center">
//             Hi Revanth,<br />
//             <span style={{ fontSize: '12px', fontWeight: '400' }}>Welcome back!</span>
//           </Typography>
//           <MenuItem onClick={handleClose}>
//             <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
//               Home
//             </Link>
//           </MenuItem>
//           <MenuItem onClick={handleClose}>
//             <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
//               My Profile
//             </Link>
//           </MenuItem>
//           <MenuItem onClick={handleClose}>
//             <Link to="/editProfile" style={{ textDecoration: 'none', color: 'inherit' }}>
//               Edit Profile
//             </Link>
//           </MenuItem>
//           <MenuItem onClick={handleClose}>
//             <Link to="/logout" style={{ textDecoration: 'none', color: 'inherit' }}>
//               Logout
//             </Link>
//           </MenuItem>
//         </Menu>

//         {/* Define Routes */}
//         <Routes>
//           <Route path="/" element={
//             <Container maxWidth="md" sx={{ mt: 4, textAlign: 'center' }}>
//               <Box
//                 sx={{
//                   p: 3,
//                   borderRadius: 2,
//                   boxShadow: 3,
//                   backgroundColor: '#f5f5f5',
//                 }}
//               >
//                 <Typography variant="h2" component="h1" gutterBottom>
//                   Welcome to the Home Page!
//                 </Typography>
//                 <Typography variant="h6" component="p" paragraph>
//                   This is a placeholder for the home page content. You can add more information, 
//                   links, or images to make this page more engaging and informative.
//                 </Typography>
//                 {/* <Button
//                   component={Link}
//                   to="/profile"
//                   variant="contained"
//                   color="primary"
//                   sx={{ mt: 2 }}
//                 >
//                   Go to My Profile
//                 </Button> */}
//               </Box>
//             </Container>
//           } />
//           <Route path="/profile" element={<ViewUser />} />
//           {/* <Route path="/profile" element={authenticated ? <ViewUser /> : <Login />} /> */}
//            {/* <Route path="/login" element={<Login />} /> */}
//            <Route path="/editProfile" element={<EditUser />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;




// // import React, { useState, useEffect } from 'react';
// // import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// // import { IconButton, Menu, MenuItem, Typography, Container, Box } from '@mui/material';
// // import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
// // import Login from './Login';
// // import EditUser from './EditUser';
// // import ViewUser from './ViewUser';

// // function App() {
// //   const [anchorEl, setAnchorEl] = useState(null);
// //   const [authenticated, setAuthenticated] = useState(false);
// //   // const navigate = useNavigate();

// //   useEffect(() => {
// //     // Check if user is authenticated
// //     const token = localStorage.getItem('jwt');
// //     setAuthenticated(!!token);
// //   }, []);

// //   const handleClick = (event) => {
// //     setAnchorEl(event.currentTarget);
// //   };

// //   const handleClose = () => {
// //     setAnchorEl(null);
// //   };

// //   return (
// //     <Router>
// //       <div className="App">
// //         {authenticated && (
// //           <IconButton
// //             onClick={handleClick}
// //             sx={{
// //               position: 'absolute',
// //               top: 20,
// //               right: 20,
// //               height: 50,
// //               width: 50,
// //               border: '2px solid black',
// //               backgroundColor: 'lightskyblue',
// //               borderRadius: '50%',
// //               overflow: 'hidden',
// //             }}
// //           >
// //             <AccountCircleIcon sx={{ fontSize: 40 }} />
// //           </IconButton>
// //         )}
// //         {authenticated && (
// //           <Menu
// //             anchorEl={anchorEl}
// //             open={Boolean(anchorEl)}
// //             onClose={handleClose}
// //             PaperProps={{
// //               sx: {
// //                 borderRadius: '10px',
// //                 width: 200,
// //                 mt: 2,
// //                 p: 2,
// //               },
// //             }}
// //           >
// //             <Typography variant="h6" align="center">
// //               Hi User,<br />
// //               <span style={{ fontSize: '12px', fontWeight: '400' }}>Welcome back!</span>
// //             </Typography>
// //             <MenuItem onClick={handleClose}>
// //               <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
// //                 Home
// //               </Link>
// //             </MenuItem>
// //             <MenuItem onClick={handleClose}>
// //               <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
// //                 My Profile
// //               </Link>
// //             </MenuItem>
// //             <MenuItem onClick={handleClose}>
// //               <Link to="/editProfile" style={{ textDecoration: 'none', color: 'inherit' }}>
// //                 Edit Profile
// //               </Link>
// //             </MenuItem>
// //             <MenuItem onClick={handleClose}>
// //               <Link to="/logout" style={{ textDecoration: 'none', color: 'inherit' }}>
// //                 Logout
// //               </Link>
// //             </MenuItem>
// //           </Menu>
// //         )}

// //         <Routes>
// //           <Route path="/" element={
// //             <Container maxWidth="md" sx={{ mt: 4, textAlign: 'center' }}>
// //               <Box
// //                 sx={{
// //                   p: 3,
// //                   borderRadius: 2,
// //                   boxShadow: 3,
// //                   backgroundColor: '#f5f5f5',
// //                 }}
// //               >
// //                 <Typography variant="h2" component="h1" gutterBottom>
// //                   Welcome to the Home Page!
// //                 </Typography>
// //                 <Typography variant="h6" component="p" paragraph>
// //                   This is a placeholder for the home page content. You can add more information, 
// //                   links, or images to make this page more engaging and informative.
// //                 </Typography>
// //               </Box>
// //             </Container>
// //           } />
// //           <Route path="/profile" element={authenticated ? <ViewUser /> : <Login />} />
// //           <Route path="/login" element={<Login />} />
// //           <Route path="/EditUser" element={<EditUser />} />
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout';
import Login from './Login';
import JwtDecode from './JwtDecode';
import AdminPage from './AdminPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<MainLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jwt" element={<JwtDecode/>} />
        <Route path="/admin" element={<AdminPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
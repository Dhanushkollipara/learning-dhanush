// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useLocalStorage } from 'usehooks-ts';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import {
//     Container,
//     TextField,
//     Button,
//     Typography,
//     CircularProgress,
//     Alert
// } from '@mui/material';
// import './Login.css'

// function Login() {
//     const [, setJwt] = useLocalStorage('jwt', '');
//     const navigate = useNavigate();
//     const location = useLocation();
//     const [loading, setLoading] = useState(false);
//     const [logoutMessage, setLogoutMessage] = useState('');

//     useEffect(() => {
//         if (location.state?.logoutMessage) {
//             setLogoutMessage(location.state.logoutMessage);
//             navigate(location.pathname, { replace: true });
//         }

//         if (logoutMessage) {
//             setTimeout(() => {
//                 setLogoutMessage('');
//             }, 2000);
//         }
//     }, [location.state?.logoutMessage, logoutMessage, navigate]);

//     const formik = useFormik({
//         initialValues: {
//             identifier: '',
//             password: ''
//         },
//         validationSchema: Yup.object({
//             identifier: Yup.string()
//                 .email('Invalid email format')
//                 .matches(/@gmail\.com$/, 'Email must be a Gmail address')
//                 .required('Identifier is required'),
//             password: Yup.string()
//                 .min(8, 'Password must be at least 8 characters')
//                 .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
//                 .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
//                 .matches(/[0-9]/, 'Password must contain at least one number')
//                 .matches(/[@$!%*?&#]/, 'Password must contain at least one special character')
//                 .required('Password is required')
//         }),
//         onSubmit: (values) => {
//             setLoading(true);
//             axios.post("http://localhost:1337/api/auth/local", values)
//                 .then(response => {
//                     setJwt(response.data.jwt);
//                     navigate('/dashboard', { state: { successMessage: "You have successfully logged in!" } });
//                 })
//                 .catch(err => {
//                     console.error(err);
//                 })
//                 .finally(() => {
//                     setLoading(false);
//                 });
//         }
//     });

//     return (
//         <Container maxWidth="xs">
//             <div className="form-container">
//                 <Typography variant="h4" component="h2" align="center" gutterBottom>
//                     Login
//                 </Typography>
//                 {loading && (
//                 <div className="loader-container">
//                     <CircularProgress />
//                 </div>
//             )}
//                 {logoutMessage && (
//                     <Alert severity="success" className="logout-message">
//                         {logoutMessage}
//                     </Alert>
//                 )}
//                 <form onSubmit={formik.handleSubmit}>
//                     <TextField
//                         fullWidth
//                         id="identifier"
//                         name="identifier"
//                         label="Email"
//                         variant="outlined"
//                         margin="normal"
//                         value={formik.values.identifier}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         error={formik.touched.identifier && Boolean(formik.errors.identifier)}
//                         helperText={formik.touched.identifier && formik.errors.identifier}
//                         required
//                     />
//                     <TextField
//                         fullWidth
//                         id="password"
//                         name="password"
//                         label="Password"
//                         type="password"
//                         variant="outlined"
//                         margin="normal"
//                         value={formik.values.password}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         error={formik.touched.password && Boolean(formik.errors.password)}
//                         helperText={formik.touched.password && formik.errors.password}
//                         required
//                     />
//                     <Button
//                         fullWidth
//                         type="submit"
//                         variant="contained"
//                         color="primary"
//                         disabled={loading || !formik.isValid || formik.isSubmitting}
//                         sx={{
//                             mt: 2,
//                             backgroundColor: (theme) =>
//                                 !formik.isValid || formik.isSubmitting
//                                     ? theme.palette.grey[400]
//                                     : theme.palette.primary.main,
//                             '&:hover': {
//                                 backgroundColor: (theme) =>
//                                     !formik.isValid || formik.isSubmitting
//                                         ? theme.palette.grey[500]
//                                         : theme.palette.primary.dark,
//                             }
//                         }}
//                     >
//                         {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
//                     </Button>
//                 </form>
//             </div>
//         </Container>
//     );
// }

// export default Login;





import React, { useState } from 'react';
import axios from 'axios';
import { useLocalStorage } from 'usehooks-ts';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    Container,
    TextField,
    Button,
    Typography,
    CircularProgress,
    Alert
} from '@mui/material';
// import './Login.css';

function Login() {
    const [, setJwt] = useLocalStorage('jwt', '');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [logoutMessage, setLogoutMessage] = useState('');

    const formik = useFormik({
        initialValues: {
            identifier: '',
            password: ''
        },
        validationSchema: Yup.object({
            identifier: Yup.string()
                .email('Invalid email format')
                .matches(/@gmail\.com$/, 'Email must be a Gmail address')
                .required('Identifier is required'),
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters')
                .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
                .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
                .matches(/[0-9]/, 'Password must contain at least one number')
                .matches(/[@$!%*?&#]/, 'Password must contain at least one special character')
                .required('Password is required')
        }),
        onSubmit: (values) => {
            setLoading(true);
            axios.post("http://localhost:1337/api/auth/local", values)
                .then(response => {
                    setJwt(response.data.jwt);
                    navigate('/', { replace: true, state: { successMessage: "You have successfully logged in!" } });
                })
                .catch(err => {
                    console.error(err);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    });

    return (
        <Container maxWidth="xs">
            <div className="form-container">
                <Typography variant="h4" component="h2" align="center" gutterBottom>
                    Login
                </Typography>
                {loading && (
                <div className="loader-container">
                    <CircularProgress />
                </div>
            )}
                {logoutMessage && (
                    <Alert severity="success" className="logout-message">
                        {logoutMessage}
                    </Alert>
                )}
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        id="identifier"
                        name="identifier"
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        value={formik.values.identifier}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.identifier && Boolean(formik.errors.identifier)}
                        helperText={formik.touched.identifier && formik.errors.identifier}
                        required
                    />
                    <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        required
                    />
                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={loading || !formik.isValid || formik.isSubmitting}
                        sx={{
                            mt: 2,
                            backgroundColor: (theme) =>
                                !formik.isValid || formik.isSubmitting
                                    ? theme.palette.grey[400]
                                    : theme.palette.primary.main,
                            '&:hover': {
                                backgroundColor: (theme) =>
                                    !formik.isValid || formik.isSubmitting
                                        ? theme.palette.grey[500]
                                        : theme.palette.primary.dark,
                            }
                        }}
                    >
                        {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
                    </Button>
                </form>
            </div>
        </Container>
    );
}

export default Login;

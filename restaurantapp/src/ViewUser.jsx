import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgress, Typography, Container, Card, CardContent, CardHeader, Snackbar, Alert, Box, Divider, Avatar, Grid } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

const ViewUser = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const userId = 3;
        console.log(userId)
        if (!userId) {
            setError('User not logged in or ID not found');
            setLoading(false);
            return;
        }

        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:1337/api/users/${userId}`);
                setUser(response.data);
            } catch (err) {
                setError('Error fetching user data');
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) {
        return (
            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                <CircularProgress color="primary" />
                <Typography variant="h6" sx={{ marginTop: 2 }}>Loading...</Typography>
            </Container>
        );
    }

    if (error) {
        return (
            <Snackbar open={Boolean(error)} autoHideDuration={6000} onClose={() => setError(null)} sx={{ bottom: 0 }}>
                <Alert onClose={() => setError(null)} severity="error">
                    {error}
                </Alert>
            </Snackbar>
        );
    }

    if (!user) {
        return (
            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                <Typography variant="h6">No user information available</Typography>
            </Container>
        );
    }

    return (
        <Container sx={{ marginTop: 4, padding: 2 }}>
            <Card sx={{ maxWidth: 600, mx: 'auto', borderRadius: 2, boxShadow: 3 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: deepPurple[500] }}>
                            {user.username.charAt(0).toUpperCase()}
                        </Avatar>
                    }
                    title="User Details"
                    subheader={user.email}
                    sx={{ backgroundColor: deepPurple[50] }}
                />
                <Divider />
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h6" component="div" gutterBottom>
                                <strong>Username:</strong> {user.username}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6" component="div">
                                <strong>Email:</strong> {user.email}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
};

export default ViewUser;

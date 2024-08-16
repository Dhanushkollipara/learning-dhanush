import React, { useState, useEffect } from 'react';
import { Button, List, ListItem, ListItemText, Box, Typography } from '@mui/material';
import axios from 'axios';
import RestaurantForm from './RestaurantForm';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/restaurants');
      setRestaurants(response.data.data);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:1337/api/restaurants/${id}`);
      fetchRestaurants();
      setSelectedRestaurant(null); // Clear selected restaurant after deletion
    } catch (error) {
      console.error('Error deleting restaurant:', error);
    }
  };

  const handleDetails = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsEditing(false);
    setIsAdding(false); // Hide add form if it was open
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleAddClick = () => {
    setIsAdding(true);
    setSelectedRestaurant(null);
    setIsEditing(false);
  };

  const handleFormSubmit = () => {
    setIsEditing(false);
    setIsAdding(false);
    setSelectedRestaurant(null);
    fetchRestaurants();
  };

  return (
    <Box>
      {/* Add Restaurant Button */}
      <Box mb={2}>
        <Button variant="contained" color="primary" onClick={handleAddClick}>
          Add Restaurant
        </Button>
      </Box>

      {/* Restaurant Form for Adding or Editing */}
      {isAdding && (
        <Box mb={4}>
          <RestaurantForm
            initialValues={{ name: '', email: '', status: false }}
            onSubmit={handleFormSubmit}
            editMode={false}
          />
        </Box>
      )}

      {/* List of Restaurants */}
      <List>
        {restaurants.map((restaurant) => (
          <ListItem key={restaurant.id}>
            <ListItemText primary={restaurant.attributes.name} />
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleDetails(restaurant)}
            >
              Details
            </Button>
          </ListItem>
        ))}
      </List>

      {/* Restaurant Details Section */}
      {selectedRestaurant && (
        <Box mt={4} p={2} border={1} borderColor="grey.300">
          {!isEditing ? (
            <>
              <Typography variant="h6">Restaurant Details</Typography>
              <Typography><strong>Name:</strong> {selectedRestaurant.attributes.name}</Typography>
              <Typography><strong>Email:</strong> {selectedRestaurant.attributes.email}</Typography>
              <Typography><strong>Status:</strong> {selectedRestaurant.attributes.status ? 'Active' : 'Inactive'}</Typography>
              <Button variant="contained" color="primary" onClick={handleEditClick}>
                Edit
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleDelete(selectedRestaurant.id)}
                style={{ marginLeft: '8px' }}
              >
                Delete
              </Button>
            </>
          ) : (
            <RestaurantForm
              initialValues={{
                id: selectedRestaurant.id,
                name: selectedRestaurant.attributes.name,
                email: selectedRestaurant.attributes.email,
                status: selectedRestaurant.attributes.status,
              }}
              onSubmit={handleFormSubmit}
              editMode={true}
            />
          )}
        </Box>
      )}
    </Box>
  );
};

export default RestaurantList;

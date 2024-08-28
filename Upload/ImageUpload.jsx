import React, { useState } from 'react';
import { Button, Typography, List, ListItem, ListItemIcon, ListItemText, Alert } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box } from '@mui/system';
import axios from 'axios';

const ImageUpload = () => {
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState('');

  const handleImageChange = (e) => {
    setImages(Array.from(e.target.files)); // Converts FileList to an array
  };

  const handleImageUpload = async () => {
    const formData = new FormData();
    images.forEach((image) => {
      formData.append('images', image);
    });

    try {
      const response = await axios.post('/upload/images', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage(response.data);
    } catch (error) {
      setMessage('Error uploading images.');
    }
  };

  return (
    <Box p={2} border={1} borderRadius={2} borderColor="grey.300" sx={{ maxWidth: 400, margin: 'auto' }}>
      <Typography variant="h6" gutterBottom>
        Upload Images
      </Typography>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="upload-images"
        type="file"
        onChange={handleImageChange}
        multiple
      />
      <label htmlFor="upload-images">
        <Button
          variant="contained"
          color="primary"
          component="span"
          startIcon={<CloudUploadIcon />}
          sx={{ mt: 2 }}
        >
          Select Images
        </Button>
      </label>

      {images.length > 0 && (
        <List sx={{ mt: 2 }}>
          {images.map((image, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <ImageIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={image.name} />
            </ListItem>
          ))}
        </List>
      )}

      <Button
        variant="contained"
        color="secondary"
        onClick={handleImageUpload}
        sx={{ mt: 2 }}
        startIcon={<CloudUploadIcon />}
        disabled={images.length === 0}
      >
        Upload Images
      </Button>

      {message && (
        <Alert severity={message.includes('Error') ? 'error' : 'success'} sx={{ mt: 2 }}>
          {message}
        </Alert>
      )}
    </Box>
  );
};

export default ImageUpload;

import React, { useState } from 'react';
import { Button, Typography, List, ListItem, ListItemIcon, ListItemText, Alert } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box } from '@mui/system';
import axios from 'axios';

const VideoUpload = () => {
  const [video, setVideo] = useState(null);
  const [message, setMessage] = useState('');

  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleVideoUpload = async () => {
    const formData = new FormData();
    formData.append('video', video);

    try {
      const response = await axios.post('/upload/video', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage(response.data);
    } catch (error) {
      setMessage('Error uploading video.');
    }
  };

  return (
    <Box p={2} border={1} borderRadius={2} borderColor="grey.300" sx={{ maxWidth: 400, margin: 'auto' }}>
      <Typography variant="h6" gutterBottom>
        Upload Video
      </Typography>
      <input
        accept="video/*"
        style={{ display: 'none' }}
        id="upload-video"
        type="file"
        onChange={handleVideoChange}
      />
      <label htmlFor="upload-video">
        <Button
          variant="contained"
          color="primary"
          component="span"
          startIcon={<CloudUploadIcon />}
          sx={{ mt: 2 }}
        >
          Select Video
        </Button>
      </label>

      {video && (
        <List sx={{ mt: 2 }}>
          <ListItem>
            <ListItemIcon>
              <MovieIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary={video.name} />
          </ListItem>
        </List>
      )}

      <Button
        variant="contained"
        color="secondary"
        onClick={handleVideoUpload}
        sx={{ mt: 2 }}
        startIcon={<CloudUploadIcon />}
        disabled={!video}
      >
        Upload Video
      </Button>

      {message && (
        <Alert severity={message.includes('Error') ? 'error' : 'success'} sx={{ mt: 2 }}>
          {message}
        </Alert>
      )}
    </Box>
  );
};

export default VideoUpload;

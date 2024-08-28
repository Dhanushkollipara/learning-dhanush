import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Import the custom theme
import ImageUpload from './ImageUpload';
import VideoUpload from './VideoUpload';
import ResumeUpload from './ResumeUpload';
import { Box, Button, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';

const FileUpload = () => {
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState(null);
  const [pdf, setPDF] = useState(null);
  const [message, setMessage] = useState('');


  return (
    <ThemeProvider theme={theme}>
      <Box p={3} sx={{ maxWidth: 800, margin: 'auto' }}>
        <Typography variant="h4" gutterBottom align="center">
          File Upload Page
        </Typography>

        <ImageUpload setImages={setImages} images={images} />
        <Box mt={4}> {/* Add a gap between components */}
          <VideoUpload setVideo={setVideo} video={video} />
        </Box>
        <Box mt={4}> {/* Add a gap between components */}
          <ResumeUpload setPDF={setPDF} pdf={pdf} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default FileUpload;

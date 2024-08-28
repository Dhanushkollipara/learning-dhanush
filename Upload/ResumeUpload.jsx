import React, { useState } from 'react';
import { Button, Typography, List, ListItem, ListItemIcon, ListItemText, Alert } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box } from '@mui/system';
import axios from 'axios';

const ResumeUpload = () => {
  const [pdf, setPDF] = useState(null);
  const [message, setMessage] = useState('');

  const handlePDFChange = (e) => {
    setPDF(e.target.files[0]);
  };

  const handlePDFUpload = async () => {
    const formData = new FormData();
    formData.append('resume', pdf);

    try {
      const response = await axios.post('/upload/resume', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage(response.data);
    } catch (error) {
      setMessage('Error uploading PDF.');
    }
  };

  return (
    <Box p={2} border={1} borderRadius={2} borderColor="grey.300" sx={{ maxWidth: 400, margin: 'auto' }}>
      <Typography variant="h6" gutterBottom>
        Upload Resume (PDF, DOC, DOCX)
      </Typography>
      <input
        accept=".pdf,.doc,.docx"
        style={{ display: 'none' }}
        id="upload-pdf"
        type="file"
        onChange={handlePDFChange}
      />
      <label htmlFor="upload-pdf">
        <Button
          variant="contained"
          color="primary"
          component="span"
          startIcon={<CloudUploadIcon />}
          sx={{ mt: 2 }}
        >
          Select File
        </Button>
      </label>

      {pdf && (
        <List sx={{ mt: 2 }}>
          <ListItem>
            <ListItemIcon>
              <PictureAsPdfIcon color="error" />
            </ListItemIcon>
            <ListItemText primary={pdf.name} />
          </ListItem>
        </List>
      )}

      <Button
        variant="contained"
        color="secondary"
        onClick={handlePDFUpload}
        sx={{ mt: 2 }}
        startIcon={<CloudUploadIcon />}
        disabled={!pdf}
      >
        Upload PDF
      </Button>

      {message && (
        <Alert severity={message.includes('Error') ? 'error' : 'success'} sx={{ mt: 2 }}>
          {message}
        </Alert>
      )}
    </Box>
  );
};

export default ResumeUpload;

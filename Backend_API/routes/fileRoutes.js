const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');
const videoController = require('../controllers/videoController');
const resumeController = require('../controllers/resumeController');

// Combined route handler for uploading all files
router.post('/', (req, res) => {
  imageController.uploadImages(req, res, (err) => {
    if (err) {
      return res.status(500).send({ message: 'Error uploading images.' });
    }
    videoController.uploadVideo(req, res, (err) => {
      if (err) {
        return res.status(500).send({ message: 'Error uploading video.' });
      }
      resumeController.uploadResume(req, res, (err) => {
        if (err) {
          return res.status(500).send({ message: 'Error uploading resume.' });
        }
        res.send('All files uploaded successfully!');
      });
    });
  });
});

module.exports = router;

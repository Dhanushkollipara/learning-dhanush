const path = require('path');
const multer = require('multer');

// Define storage engine for videos
const storageVideos = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/videos');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// File filter for videos
const fileFilterVideos = (req, file, cb) => {
  const fileTypes = /mp4|wmv/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb('Error: Videos of this type are not allowed!');
  }
};

// Initialize upload handler for videos
const uploadVideo = multer({ storage: storageVideos, fileFilter: fileFilterVideos }).single('video');

// Controller function for uploading videos
exports.uploadVideo = (req, res) => {
  uploadVideo(req, res, (err) => {
    if (err) {
      return res.status(500).send({ message: err });
    }
    res.send('Video uploaded successfully!');
  });
};

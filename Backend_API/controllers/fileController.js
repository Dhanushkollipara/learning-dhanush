const path = require('path');
const fs = require('fs');
const multer = require('multer');

// Create directories if they don't exist
const createDirectories = () => {
  const dirs = ['uploads/images', 'uploads/resumes', 'uploads/videos'];
  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};

createDirectories();

// Define storage engines for different types of files
const storageImages = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/images');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const storageResumes = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/resumes');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const storageVideos = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/videos');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// Define file filters to check file types
const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|gif|png|doc|docx|pdf|mp4|wmv/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Error: Files of this type are not allowed!');
  }
};

// Initialize upload handlers for different files
const uploadImage = multer({ storage: storageImages, fileFilter: fileFilter }).array('images');
const uploadResume = multer({ storage: storageResumes, fileFilter: fileFilter }).single('resume');
const uploadVideo = multer({ storage: storageVideos, fileFilter: fileFilter }).single('video');

// Controller functions
exports.uploadImages = (req, res) => {
  uploadImage(req, res, (err) => {
    if (err) {
      return res.status(500).send({ message: err });
    }
    res.send('Images uploaded successfully!');
  });
};

exports.uploadResume = (req, res) => {
  uploadResume(req, res, (err) => {
    if (err) {
      return res.status(500).send({ message: err });
    }
    res.send('Resume uploaded successfully!');
  });
};

exports.uploadVideo = (req, res) => {
  uploadVideo(req, res, (err) => {
    if (err) {
      return res.status(500).send({ message: err });
    }
    res.send('Video uploaded successfully!');
  });
};

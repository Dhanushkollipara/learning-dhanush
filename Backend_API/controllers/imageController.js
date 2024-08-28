const path = require('path');
const multer = require('multer');

// Define storage engine for images
const storageImages = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/images');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// File filter for images
const fileFilterImages = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|gif|png/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb('Error: Images of this type are not allowed!');
  }
};

// Initialize upload handler for images
const uploadImage = multer({ storage: storageImages, fileFilter: fileFilterImages }).array('images');

// Controller function for uploading images
exports.uploadImages = (req, res) => {
  uploadImage(req, res, (err) => {
    if (err) {
      return res.status(500).send({ message: err });
    }
    res.send('Images uploaded successfully!');
  });
};

const path = require('path');
const multer = require('multer');

// Define storage engine for resumes
const storageResumes = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/resumes');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// File filter for resumes
const fileFilterResumes = (req, file, cb) => {
  const fileTypes = /doc|docx|pdf/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb('Error: Resumes of this type are not allowed!');
  }
};

// Initialize upload handler for resumes
const uploadResume = multer({ storage: storageResumes, fileFilter: fileFilterResumes }).single('resume');

// Controller function for uploading resumes
exports.uploadResume = (req, res) => {
  uploadResume(req, res, (err) => {
    if (err) {
      return res.status(500).send({ message: err });
    }
    res.send('Resume uploaded successfully!');
  });
};

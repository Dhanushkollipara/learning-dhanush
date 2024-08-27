var express = require('express');
var router = express.Router();
const carrentalController = require("../controllers/carrental")
const { body, validationResult, param } = require('express-validator');


const validateUser = [
  body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('age').isInt({ min: 0 }).withMessage('Age must be a positive integer'),
  body('gender').isIn(['male', 'female']).withMessage('Gender must be male, or female'),
  body('dob').isDate().withMessage('Date of birth must be a valid date'),
  body('city').isLength({ min: 1 }).withMessage('City is required'),
  body('profession').isLength({ min: 1 }).withMessage('Profession is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

const validateUserUpdate = [
  body('username').optional().isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
  body('email').optional().isEmail().withMessage('Invalid email address'),
  body('age').optional().isInt({ min: 0 }).withMessage('Age must be a positive integer'),
  body('gender').optional().isIn(['male', 'female', 'other']).withMessage('Gender must be male, female, or other'),
  body('dob').optional().isDate().withMessage('Date of birth must be a valid date'),
  body('city').optional().isLength({ min: 1 }).withMessage('City is required'),
  body('profession').optional().isLength({ min: 1 }).withMessage('Profession is required'),
  body('password').optional().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

const validateId = [
  param('id').isMongoId().withMessage('Invalid user ID format')
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};



router.get('/', carrentalController.index);

router.get('/:id', validateId, handleValidationErrors, carrentalController.index_id);

router.post('/', validateUser, handleValidationErrors, carrentalController.createCustomer);

router.put('/:id', validateId, validateUserUpdate, handleValidationErrors, carrentalController.editCustomer);

router.patch('/:id', validateId, validateUserUpdate, handleValidationErrors, carrentalController.editCustomer_patch);

router.delete('/:id', validateId, carrentalController.deleteCustomer);

module.exports = router;
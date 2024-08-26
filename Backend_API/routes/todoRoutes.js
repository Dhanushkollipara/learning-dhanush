const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const Todo = require('../models/todo');
const sanitizeHtml = require('sanitize-html');

router.post(
  '/',
  [
    check('name').trim().escape().not().isEmpty().withMessage('Name is required'),
    check('status').isIn(['complete', 'incomplete']).withMessage('Invalid status'),
    /* check('description')
    .notEmpty().withMessage('Description is required')
    .customSanitizer(value => sanitizeHtml(value, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'h1', 'h2']), // Add any tags you want to allow
      allowedAttributes: {
        ...sanitizeHtml.defaults.allowedAttributes,
        'img': ['src', 'alt']
      },
      allowedSchemes: ['data', 'http', 'https']
    })), */

    check('description')
      .notEmpty().withMessage('Description is required')
      .customSanitizer(value => sanitizeHtml(value, {
        allowedTags: [], // Disallow all HTML tags
        allowedAttributes: {}, // Disallow all attributes
        allowedSchemes: []
      })),
  ],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, status, description } = req.body;
      const newTodo = new Todo({ name, status, description });
      const result = await newTodo.save();
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/', async (req, res, next) => {
    try {
        let todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        let todo = await Todo.findById(req.params.id);
        if (todo) {
            res.json(todo);
        } else {
            res.status(404).json({ error: 'Todo not found' });
        }
    } catch (error) {
        next(error);
    }
});

router.put(
  '/:id',
  [
    check('name').optional().trim().escape(),
    check('status').optional().isIn(['complete', 'incomplete']),
    check('description').optional().trim().escape(),
  ],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, status, description } = req.body;
      const updatedTodo = await Todo.findByIdAndUpdate(
        req.params.id,
        { name, status, description },
        { new: true }
      );

      if (updatedTodo) {
        res.json(updatedTodo);
      } else {
        res.status(404).json({ error: 'Todo not found' });
      }
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id', async (req, res, next) => {
    try {
        let result = await Todo.findByIdAndDelete(req.params.id);
        if (result) {
            res.json(result);
        } else {
            res.status(404).json({ error: 'Todo not found' });
        }
    } catch (error) {
        next(error);
    }
});

module.exports = router;

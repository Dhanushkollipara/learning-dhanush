const express = require('express');
const { check } = require('express-validator');
const router = express.Router();

const todoController = require('../controllers/todo')

router.post(
  '/',
  [
    check('name').trim().escape().not().isEmpty().withMessage('Name is required'),
    check('status').isIn(['complete', 'incomplete']).withMessage('Invalid status'),
    check('description')
    .notEmpty().withMessage('Description is required')
    .escape()
  ],
  todoController.createTodo
);

router.get('/', todoController.index);

router.get('/:id', todoController.index_id);

router.put(
  '/:id',
  [
    check('name').optional().trim().escape(),
    check('status').optional().isIn(['complete', 'incomplete']),
    check('description').optional().trim().escape(),
  ],
  todoController.editTodo
);

router.delete('/:id', todoController.deleteTodo);

module.exports = router;

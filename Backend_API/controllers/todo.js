const Todo = require('../models/todo');
const { validationResult } = require('express-validator');


exports.createTodo = async (req, res, next) => {
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

  exports.index = async (req, res, next) => {
    try {
        let todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        next(error);
    }
}

exports.index_id = async (req, res, next) => {
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
}

exports.editTodo = async (req, res, next) => {
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

  exports.deleteTodo = async (req, res, next) => {
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
}
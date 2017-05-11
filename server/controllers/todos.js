'use strict';

const Todo     = require('../models').Todo;
const TodoItem = require('../models').TodoItem;

module.exports = {

  /**
   * Create a todo
   */
  create(req, res) {
    return Todo
      .create({
        title: req.body.title,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },

  /**
   * List todos
   */
  list(req, res) {
    return Todo
      .findAll({
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }],
      })
      .then(todos => res.status(200).send(todos))
      .catch(error => res.status(400).send(error));
  },

  /**
   * Find todo by ID
   */
  findTodoById(id) {
    return Todo
      .findById(id, {
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }],
      })
      .then(todo => {
        if (!todo) {
          return null;
        }
        return todo;
      })
  },

  /**
   * Retrieve a todo
   */
  retrieve(req, res) {
    return Todo
      .findById(req.params.todoId, {
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }],
      })
      .then(todo => {
        if (!todo) {
          return res.status(400).send({
            message: 'Todo Not Found',
          });
        }
        return res.status(200).send(todo);
      })
      .catch(error => res.status(400).send(error));
  },

  /**
   * Update a todo
   */
  update(req, res) {
    return Todo
      .findById(req.params.todoId, {
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }],
      })
      .then(todo => {
        if (!todo) {
          return res.status(400).send({
            message: 'Todo Not Found',
          });
        }
        return todo
          .update({
            title: req.body.title || todo.title,
          })
          .then(() => res.status(200).send(todo))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};

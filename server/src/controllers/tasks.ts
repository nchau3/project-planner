import { RequestHandler } from "express";
import { Task } from '../models/task';

const taskQueries = require('../db/queries/tasks');

export const getAllTasks: RequestHandler = (req, res, next) => {
  taskQueries.getAllTasks()
    .then((tasks: Task[]) => {
      res.json({ tasks });
    })
    .catch((err: Error) => {
      res
        .status(500)
        .json({ error: err.message });
    });
};

module.exports = { getAllTasks };
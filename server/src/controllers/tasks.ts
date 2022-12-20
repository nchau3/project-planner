import { RequestHandler } from "express";
import { Task } from '../models/task';

import * as taskQueries from '../db/queries/tasks.js';

const getAllTasks: RequestHandler = (req, res, next) => {
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

export { getAllTasks };
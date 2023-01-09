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

const changeTaskStatus: RequestHandler = (req, res, next) => {
  console.log(req.body, req.params);
  const task_id = req.params.task_id;
  const status = req.body.status;

  taskQueries.changeTaskStatus(task_id, status)
    .then(data => {
      res.json(data);
    })
    .catch((err: Error) => {
      res
        .status(500)
        .json({ error: err.message});
    });
};


export { getAllTasks, changeTaskStatus };
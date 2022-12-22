import { RequestHandler } from "express";
import { Project } from "../models/project";

import * as projectQueries from '../db/queries/projects.js';
import * as taskQueries from '../db/queries/tasks.js';
import { convertProjectDates } from "../helpers.js";

const getAllProjects: RequestHandler = (req, res, next) => {
  projectQueries.getAllProjects()
    .then((projects: Project[]) => {
      res.json(convertProjectDates(projects));
    })
    .catch((err: Error) => {
      res
        .status(500)
        .json({ error: err.message });
    });
};

const getProject: RequestHandler = async (req, res, next) => {
  const project_id = req.params.project_id;

  try {
    const project = await projectQueries.getProject(project_id);
    const tasks = await taskQueries.getProjectTasks(project_id);

    return res.json(convertProjectDates({
      ...project,
      tasks: tasks
    }))
  } catch(err) {
    res
    .status(500)
    .json({ err });
  }
};

const createProject: RequestHandler = (req, res, next) => {
  const project = req.body.project;

  projectQueries.createProject(project)
    .then(data => {
      res.json({ data });
    })
    .catch((err: Error) => {
      res
        .status(500)
        .json({ error: err.message });
    });
};

export { getAllProjects, createProject, getProject };
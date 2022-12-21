import { RequestHandler } from "express";
import { Project } from "../models/project";

import * as projectQueries from '../db/queries/projects.js';

const getAllProjects: RequestHandler = (req, res, next) => {
  projectQueries.getAllProjects()
    .then((projects: Project[]) => {
      res.json({ projects });
    })
    .catch((err: Error) => {
      res
        .status(500)
        .json({ error: err.message });
    });
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

export { getAllProjects, createProject };
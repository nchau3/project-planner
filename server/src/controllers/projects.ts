import { RequestHandler } from "express";
import { Project } from "../models/project";

const projectQueries = require('../db/queries/projects');

export const getProjects: RequestHandler = (req, res, next) => {
  projectQueries.getProjects()
    .then((projects: Project[]) => {
      res.json({ projects });
    })
    .catch((err: Error) => {
      res
        .status(500)
        .json({ error: err.message });
    });
};

module.exports = { getProjects };
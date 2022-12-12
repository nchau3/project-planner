import { RequestHandler } from "express";
import { Project } from "../models/project";

const projectQueries = require('../db/queries/projects');

export const getAllProjects: RequestHandler = (req, res, next) => {
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

module.exports = { getAllProjects };
import * as projectQueries from '../db/queries/projects.js';
import { convertProjectDates } from "../helpers.js";
const getAllProjects = (req, res, next) => {
    projectQueries.getAllProjects()
        .then((projects) => {
        res.json(convertProjectDates(projects));
    })
        .catch((err) => {
        res
            .status(500)
            .json({ error: err.message });
    });
};
const getProject = (req, res, next) => {
    const project_id = req.params.project_id;
    projectQueries.getProject(project_id)
        .then((project) => {
        res.json(convertProjectDates(project));
    })
        .catch((err) => {
        res
            .status(500)
            .json({ error: err.message });
    });
};
const createProject = (req, res, next) => {
    const project = req.body.project;
    projectQueries.createProject(project)
        .then(data => {
        res.json({ data });
    })
        .catch((err) => {
        res
            .status(500)
            .json({ error: err.message });
    });
};
export { getAllProjects, createProject, getProject };

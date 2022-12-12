"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProjects = void 0;
const projectQueries = require('../db/queries/projects');
const getAllProjects = (req, res, next) => {
    projectQueries.getAllProjects()
        .then((projects) => {
        res.json({ projects });
    })
        .catch((err) => {
        res
            .status(500)
            .json({ error: err.message });
    });
};
exports.getAllProjects = getAllProjects;
module.exports = { getAllProjects: exports.getAllProjects };

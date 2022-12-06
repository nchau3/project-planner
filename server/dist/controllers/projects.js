"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjects = void 0;
const projectQueries = require('../db/queries/projects');
const getProjects = (req, res, next) => {
    projectQueries.getProjects()
        .then((projects) => {
        res.json({ projects });
    })
        .catch((err) => {
        res
            .status(500)
            .json({ error: err.message });
    });
};
exports.getProjects = getProjects;
module.exports = { getProjects: exports.getProjects };

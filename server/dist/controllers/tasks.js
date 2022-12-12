"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTasks = void 0;
const taskQueries = require('../db/queries/tasks');
const getAllTasks = (req, res, next) => {
    taskQueries.getAllTasks()
        .then((tasks) => {
        res.json({ tasks });
    })
        .catch((err) => {
        res
            .status(500)
            .json({ error: err.message });
    });
};
exports.getAllTasks = getAllTasks;
module.exports = { getAllTasks: exports.getAllTasks };

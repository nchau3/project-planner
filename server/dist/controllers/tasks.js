const taskQueries = require('../db/queries/tasks');
export const getAllTasks = (req, res, next) => {
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
module.exports = { getAllTasks };

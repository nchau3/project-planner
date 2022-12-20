import * as taskQueries from '../db/queries/tasks.js';
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
export { getAllTasks };

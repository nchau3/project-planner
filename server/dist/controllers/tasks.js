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
const changeTaskStatus = (req, res, next) => {
    console.log(req.body, req.params);
    const task_id = req.params.task_id;
    const status = req.body.status;
    taskQueries.changeTaskStatus(task_id, status)
        .then(data => {
        res.json(data);
    })
        .catch((err) => {
        res
            .status(500)
            .json({ error: err.message });
    });
};
export { getAllTasks, changeTaskStatus };

import db from '../connection.js';
const getAllTasks = () => {
    return db.query('SELECT * FROM tasks;')
        .then((data) => {
        return data.rows;
    });
};
const getProjectTasks = (project_id) => {
    return db.query('SELECT * FROM tasks WHERE project_id = $1;', [project_id])
        .then((data) => {
        return data.rows;
    });
};
export { getAllTasks, getProjectTasks };

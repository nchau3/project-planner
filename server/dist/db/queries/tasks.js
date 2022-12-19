import db from '../connection';
const getAllTasks = () => {
    return db.query('SELECT * FROM tasks;')
        .then((data) => {
        return data.rows;
    });
};
export { getAllTasks };

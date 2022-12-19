import db from '../connection';
const getAllProjects = () => {
    return db.query('SELECT * FROM projects;')
        .then((data) => {
        return data.rows;
    });
};
export { getAllProjects };

import db from '../connection';
const getAllUsers = () => {
    return db.query('SELECT * FROM users;')
        .then((data) => {
        return data.rows;
    });
};
export { getAllUsers };

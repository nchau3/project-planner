import db from '../connection.js';
const getAllUsers = () => {
    return db.query('SELECT * FROM users;')
        .then((data) => {
        return data.rows;
    });
};
export { getAllUsers };

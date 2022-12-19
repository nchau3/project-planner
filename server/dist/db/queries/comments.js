import db from '../connection';
const getAllComments = () => {
    return db.query('SELECT * FROM comments;')
        .then((data) => {
        return data.rows;
    });
};
export { getAllComments };

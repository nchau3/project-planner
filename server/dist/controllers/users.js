import * as userQueries from '../db/queries/users.js';
const getAllUsers = (req, res, next) => {
    userQueries.getAllUsers()
        .then((users) => {
        res.json({ users });
    })
        .catch((err) => {
        res
            .status(500)
            .json({ error: err.message });
    });
};
export { getAllUsers };

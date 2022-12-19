const userQueries = require('../db/queries/users');
export const getAllUsers = (req, res, next) => {
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
module.exports = { getAllUsers };

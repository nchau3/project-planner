"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
const userQueries = require('../db/queries/users');
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
exports.getAllUsers = getAllUsers;
module.exports = { getAllUsers: exports.getAllUsers };

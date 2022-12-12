"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllComments = void 0;
const commentQueries = require('../db/queries/comments');
const getAllComments = (req, res, next) => {
    commentQueries.getAllComments()
        .then((comments) => {
        res.json({ comments });
    })
        .catch((err) => {
        res
            .status(500)
            .json({ error: err.message });
    });
};
exports.getAllComments = getAllComments;
module.exports = { getAllComments: exports.getAllComments };

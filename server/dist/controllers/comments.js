const commentQueries = require('../db/queries/comments');
export const getAllComments = (req, res, next) => {
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
module.exports = { getAllComments };

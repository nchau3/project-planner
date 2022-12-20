import * as commentQueries from '../db/queries/comments.js';
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
export { getAllComments };

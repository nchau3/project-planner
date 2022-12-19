const projectQueries = require('../db/queries/projects');
export const getAllProjects = (req, res, next) => {
    projectQueries.getAllProjects()
        .then((projects) => {
        res.json({ projects });
    })
        .catch((err) => {
        res
            .status(500)
            .json({ error: err.message });
    });
};
module.exports = { getAllProjects };

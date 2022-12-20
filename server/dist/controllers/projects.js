import * as projectQueries from '../db/queries/projects.js';
const getAllProjects = (req, res, next) => {
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
const createProject = (req, res, next) => {
    const project = req.params;
    console.log(project);
    /*   projectQueries.createProject()
        .then(data => {
          res.json({ data });
        })
        .catch((err: Error) => {
          res
            .status(500)
            .json({ error: err.message });
        }); */
};
export { getAllProjects, createProject };

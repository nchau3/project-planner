var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as projectQueries from '../db/queries/projects.js';
import * as taskQueries from '../db/queries/tasks.js';
import { convertProjectDates } from "../helpers.js";
const getAllProjects = (req, res, next) => {
    projectQueries.getAllProjects()
        .then((projects) => {
        res.json(convertProjectDates(projects));
    })
        .catch((err) => {
        res
            .status(500)
            .json({ error: err.message });
    });
};
const getProject = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const project_id = req.params.project_id;
    try {
        const project = yield projectQueries.getProject(project_id);
        const tasks = yield taskQueries.getProjectTasks(project_id);
        return res.json(convertProjectDates(Object.assign(Object.assign({}, project), { tasks: tasks })));
    }
    catch (err) {
        res
            .status(500)
            .json({ err });
    }
});
const createProject = (req, res, next) => {
    const project = req.body.project;
    projectQueries.createProject(project)
        .then(data => {
        res.json({ data });
    })
        .catch((err) => {
        res
            .status(500)
            .json({ error: err.message });
    });
};
export { getAllProjects, createProject, getProject };

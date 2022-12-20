import { Router } from 'express';
const router = Router();
import { getAllProjects } from '../controllers/projects.js';
router.get('/', (req, res, next) => {
    getAllProjects(req, res, next);
});
router.post('/new', (req, res, next) => {
    console.log("req params", req.params);
});
export default router;

import { Router } from 'express';
const router = Router();
import { getAllProjects } from '../controllers/projects.js';
router.get('/', (req, res, next) => {
    getAllProjects(req, res, next);
});
export default router;

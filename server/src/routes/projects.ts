import { Router } from 'express';
import { createProject, getAllProjects } from '../controllers/projects.js';

const router = Router();

router.get('/', (req, res, next) => {
  getAllProjects(req, res, next);
})

router.post('/new', (req, res, next) => {
  createProject(req, res, next);
})

export default router;
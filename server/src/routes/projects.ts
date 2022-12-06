import { Router } from 'express';
const router = Router();

import { getProjects } from '../controllers/projects';

router.get('/', (req, res, next) => {
  getProjects(req, res, next);
})

export default router;
import { Router } from 'express';
const router = Router();

import { getAllTasks } from '../controllers/tasks.js';

router.get('/', (req, res, next) => {
  getAllTasks(req, res, next);
})

export default router;
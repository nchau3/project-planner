import { Router } from 'express';
const router = Router();

import { getAllTasks, changeTaskStatus } from '../controllers/tasks.js';

router.get('/', (req, res, next) => {
  getAllTasks(req, res, next);
})

router.patch('/:task_id', (req, res, next) => {
  changeTaskStatus(req, res, next);
})

export default router;
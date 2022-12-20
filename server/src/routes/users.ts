import { Router } from 'express';
const router = Router();

import { getAllUsers } from '../controllers/users.js';

router.get('/', (req, res, next) => {
  getAllUsers(req, res, next);
})

export default router;
import { Router } from 'express';
const router = Router();
import { getAllUsers } from '../controllers/users';
router.get('/', (req, res, next) => {
    getAllUsers(req, res, next);
});
export default router;

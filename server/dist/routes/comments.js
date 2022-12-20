import { Router } from 'express';
const router = Router();
import { getAllComments } from '../controllers/comments.js';
router.get('/', (req, res, next) => {
    getAllComments(req, res, next);
});
export default router;

import { Router } from 'express';
const router = Router();

router.get('/', () => {
  console.log('all projects');
})

export default router;
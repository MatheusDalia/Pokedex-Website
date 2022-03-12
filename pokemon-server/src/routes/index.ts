import { Router } from 'express';

import UserRouter from './UserRoutes';

const router = Router();

router.use('/user', UserRouter);
router.route('/').get((req, res) => {
  res.send('Matheus Dalia');
});

export default router;

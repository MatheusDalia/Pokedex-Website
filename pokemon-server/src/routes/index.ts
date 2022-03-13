import { Router } from 'express';

import PokemonRouter from './PokemonRoutes';

const router = Router();

router.use('/user', PokemonRouter);
router.route('/').get((req, res) => {
  res.send('Matheus Dalia');
});

export default router;

import { Router } from 'express';

import PokemonRouter from './PokemonRoutes';

const router = Router();

router.use('/user', PokemonRouter);

export default router;

import { Router } from 'express';

import PokemonRouter from './PokemonRoutes';

const router = Router();

router.use('/pokemon', PokemonRouter);

export default router;

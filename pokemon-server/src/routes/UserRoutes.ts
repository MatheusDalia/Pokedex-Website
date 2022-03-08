import { Router } from 'express';
import { PokemonController } from '../controllers';

const userRouter = Router();

userRouter.route('/')
  .post(
    PokemonController.create,
  );

userRouter.route('/:userId')
  .get(
    PokemonController.read,
  )
  .delete(
    PokemonController.delete,
  )
  .patch(
    PokemonController.patch,
  );

export default userRouter;

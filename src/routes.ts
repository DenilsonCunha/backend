import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController'

const router = Router();

//-- ROTAS USER --
router.post('/Users', new CreateUserController().handle)

export { router };
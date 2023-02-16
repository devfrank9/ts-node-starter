import { Router } from 'express';
import { main } from '../controller/main/main.controller';

export const appRouter = Router();

appRouter.get('/', main);

export default appRouter;

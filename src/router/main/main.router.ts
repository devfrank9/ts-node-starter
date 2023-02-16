import express from 'express';
import { mainController } from '../../controller';

const router = express.Router();

router.get('/', mainController.main);

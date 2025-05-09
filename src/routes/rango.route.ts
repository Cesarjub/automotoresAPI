import { Router } from 'express';
import { setRango, getAllRango } from '../controllers/rango.controller';
import { validateNotNull } from '../middlewares/notNull.middleware';

const router = Router();
const routeRango = '/rango';

router.post(routeRango, validateNotNull([
    'rango'
]), setRango);

router.get(routeRango, getAllRango);

export default router;
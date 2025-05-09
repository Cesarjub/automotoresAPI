import { Router } from 'express';
import { setIro, getAllIro } from '../controllers/iro.controller';
import { validateNotNull } from '../middlewares/notNull.middleware';

const router = Router();
const routeIro = '/iro';

router.post(routeIro, validateNotNull([
    'nombreIRO', 
    'rango_idrango'
]), setIro);

router.get(routeIro, getAllIro);

export default router;
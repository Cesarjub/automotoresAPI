import { Router } from 'express';
import { setFabricante, getAllFabricantes } from '../controllers/fabricantes.controller';
import { validateNotNull } from '../middlewares/notNull.middleware';

const router = Router();
const routeFabricante = '/fabricante';

router.post(routeFabricante, validateNotNull([
    'nombreFabricante'
]), setFabricante);

router.get(routeFabricante, getAllFabricantes);

export default router;

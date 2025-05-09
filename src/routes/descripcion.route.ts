import { Router } from 'express';
import { setDescripcion, getAllDescripciones } from '../controllers/descripcion.controller';
import { validateNotNull } from '../middlewares/notNull.middleware';

const router = Router();
const routeDescripcion = '/descripcion';

router.post(routeDescripcion, validateNotNull([
    'descripcion'
]), setDescripcion);

router.get(routeDescripcion, getAllDescripciones);

export default router;
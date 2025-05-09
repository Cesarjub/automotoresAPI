import { Router } from 'express';
import { setEstado, getAllEstadoOperativo } from '../controllers/estado.controller';
import { validateNotNull } from '../middlewares/notNull.middleware';

const router = Router();
const routeEstado = '/estado-operativo';

router.post(routeEstado, validateNotNull([
    'estadoOperativo'
]), setEstado);

router.get(routeEstado, getAllEstadoOperativo);

export default router;

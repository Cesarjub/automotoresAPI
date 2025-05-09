import { Router } from 'express';
import { setProyecto, getAllProyectos } from '../controllers/proyectos.controller';
import { validateNotNull } from '../middlewares/notNull.middleware';

const router = Router();
const routeProyecto = '/proyecto';

router.post(routeProyecto, validateNotNull([
    'nombreProyecto'
]), setProyecto);

router.get(routeProyecto, getAllProyectos);

export default router;
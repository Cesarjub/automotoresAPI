import { Router } from 'express';
import { setSubproyecto, getAllSubproyectos } from '../controllers/subproyectos.controller';
import { validateNotNull } from '../middlewares/notNull.middleware';

const router = Router();
const routeSubproyecto = '/subproyecto';

router.post(routeSubproyecto, validateNotNull([
    'nombreSubproyecto', 
    'proyectos_idproyectos', 
    'automotor_idVehiculo', 
    'IRO_idIRO'
]), setSubproyecto);

router.get(routeSubproyecto, getAllSubproyectos);

export default router;
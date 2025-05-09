import { Router } from 'express';
import { setModelo, getAllModelos } from '../controllers/modelos.controller';
import { validateNotNull } from '../middlewares/notNull.middleware';

const router = Router();
const routeModelo = '/modelo-automotor';

router.post(routeModelo, validateNotNull([
    'modelo', 
    'fechaCreacion', 
    'Descripcion_idDescripcion',
    'fabricante_idfabricante'
]), setModelo);

router.get(routeModelo, getAllModelos);

export default router;

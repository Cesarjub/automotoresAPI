import { Router } from 'express';
import { setUsuario, getAllUsuarios } from '../controllers/usuarios.controller';
import { validateNotNull } from '../middlewares/notNull.middleware';

const router = Router();
const routeUsuario = '/usuario';

router.post(routeUsuario, validateNotNull([
    'nombreUsuario', 
    'rango_idrango'
]), setUsuario);

router.get(routeUsuario, getAllUsuarios);

export default router;

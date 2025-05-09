import { Router } from 'express';
import { setAutomotor, getAllAutomotores } from '../controllers/automotores.controller';
import { validateNotNull } from '../middlewares/notNull.middleware';
import { upload } from '../middlewares/multer.middleware';

const router = Router();
const routeAutomotor = '/automotor';

router.post(routeAutomotor, upload.single('imagen'), validateNotNull([
    'noSerie',
    'noControl',
    'latitude',
    'longitude',
    'direccion',
    'proveedores_idproveedores',
    'modeloAutomotor_idmodeloAutomotor',
    'estadoOperativo_idestadoOperativo',
    'Usuarios_idUsuarios',
]), setAutomotor);

router.get(routeAutomotor, getAllAutomotores);

export default router;

import { Router } from 'express';
import { setProveedor, getAllProveedores } from '../controllers/proveedores.controller';
import { validateNotNull } from '../middlewares/notNull.middleware';

const router = Router();
const routeProveedor = '/proveedor';

router.post(routeProveedor, validateNotNull([
    'nombreProveedor'
]), setProveedor);

router.get(routeProveedor, getAllProveedores);

export default router;

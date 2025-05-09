import { Request, Response } from 'express';
import { createProveedor, findManyProveedores } from '../service/proveedores.service';

export const setProveedor = async ( req: Request, res: Response ): Promise<void> => {
  const { idproveedores, nombreProveedor } = req.body;

  try {
    const proveedor = await createProveedor({ idproveedores, nombreProveedor });
    res.status(201).json(proveedor);
  } catch ( error: any ) {
    res.status(500).json({ error: error.message || 'Error interno del servidor' });
  }
};

export const getAllProveedores = async ( req: Request, res: Response ) => {
  try {
    const proveedores = await findManyProveedores();
    res.status(200).json(proveedores);
  } catch (error: any) {
    res.status(500).json({
      message: 'Error al obtener los proveedores',
      error: error.message,
    });
  }
};

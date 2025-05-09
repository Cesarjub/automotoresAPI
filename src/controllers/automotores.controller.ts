import { Request, Response } from 'express';
import { createAutomotor, findManyAutomotores } from '../service/automotores.service';

export const setAutomotor = async ( req: Request, res: Response ) => {
  try {
    const { 
      noSerie, 
      noControl, 
      latitude, 
      longitude, 
      direccion, 
      proveedores_idproveedores, 
      modeloAutomotor_idmodeloAutomotor, 
      estadoOperativo_idestadoOperativo, 
      Usuarios_idUsuarios 
    } = req.body;

    const imagen = req.file?.buffer || null;

    const automotorData = {
      noSerie,
      noControl,
      imagen,
      latitude,
      longitude,
      direccion,
      proveedores_idproveedores: Number(proveedores_idproveedores),
      modeloAutomotor_idmodeloAutomotor: Number(modeloAutomotor_idmodeloAutomotor),
      estadoOperativo_idestadoOperativo: Number(estadoOperativo_idestadoOperativo),
      Usuarios_idUsuarios: Number(Usuarios_idUsuarios)
    };

    const automotor = await createAutomotor(automotorData);

    res.status(201).json({ message: 'Automotor creado correctamente', data: automotor });
  } catch ( error: any ) {
    res.status(500).json({ message: 'Error al crear el automotor', error: error.message });
  }
};

export const getAllAutomotores = async ( _req: Request, res: Response ) => {
  try {
    const automotores = await findManyAutomotores();
    res.json(automotores);
  } catch ( error: any ) {
    res.status(500).json({ message: 'Error al obtener los automotores', error });
  }
};
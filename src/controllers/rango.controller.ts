import { Request, Response } from 'express';
import { createRango, findManyRango } from '../service/rango.service';

export const setRango = async ( req: Request, res: Response ) => {
  const { idrango, rango } = req.body;

  try {
    const nuevoRango = await createRango({ idrango, rango });
    res.status(201).json(nuevoRango);
  } catch ( error: any ) {
    res.status(500).json({ error: 'Error al crear el rango: ' + error.message });
  }
};

export const getAllRango = async ( req: Request, res: Response ) => {
  try {
    const rangos = await findManyRango();
    res.json(rangos);
  } catch ( error: any ) {
    res.status(500).json({ error: 'Error al obtener los rangos: ' + error.message });
  }
};

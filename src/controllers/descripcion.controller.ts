import { Request, Response } from 'express';
import { createDescripcion, findManyDescripciones } from '../service/descripcion.service';

export const setDescripcion = async ( req: Request, res: Response ) => {
  const { idDescripcion, descripcion } = req.body;

  try {
    const newDescripcion = await createDescripcion({ idDescripcion, descripcion });
    res.status(201).json(newDescripcion);
  } catch ( error: any ) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllDescripciones = async ( req: Request, res: Response ) => {
  try {
    const descripciones = await findManyDescripciones();
    res.json(descripciones);
  } catch ( error: any ) {
    res.status(500).json({ error: 'Error al obtener las descripciones: ' + error.message });
  }
};
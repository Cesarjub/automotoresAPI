import { Request, Response } from 'express';
import { createModeloAutomotor, findManyModelos } from '../service/modelos.service';
import { ModeloAutomotor } from '../Interfaces/modelos.interface';

export const setModelo = async ( req: Request, res: Response ): Promise<void> => {
  const {
    modelo,
    fechaCreacion,
    Descripcion_idDescripcion,
    fabricante_idfabricante,
  }: ModeloAutomotor = req.body;

  try {
    const nuevoModeloAutomotor = await createModeloAutomotor({
      modelo,
      fechaCreacion,
      Descripcion_idDescripcion,
      fabricante_idfabricante,
    });
    res.status(201).json(nuevoModeloAutomotor);
  } catch ( error: any ) {
    res.status(500).json({ error: 'Error al crear el modelo de automotor: ' + error.message });
  }
};

export const getAllModelos = async ( _req: Request, res: Response ) => {
  try {
    const modelos = await findManyModelos();
    res.json(modelos);
  } catch ( error: any ) {
    res.status(500).json({ message: 'Error al obtener los modelos automotor', error });
  }
};
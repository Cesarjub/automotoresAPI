import { Request, Response } from 'express';
import { createFabricante, findManyFabricantes } from '../service/fabricantes.service';
import { Fabricante } from '../Interfaces/fabricantes.interface';

export const setFabricante = async ( req: Request, res: Response ): Promise<void> => {
  const { idfabricante, nombreFabricante }: Fabricante = req.body; 

  try {
    const nuevoFabricante = await createFabricante({ idfabricante, nombreFabricante });
    res.status(201).json(nuevoFabricante);
  } catch ( error: any ) {
    res.status(500).json({ error: 'Error al crear el fabricante: ' + error.message });
  }
};

export const getAllFabricantes = async ( req: Request, res: Response ) => {
  try {
    const fabricantes = await findManyFabricantes();
    res.json(fabricantes);
  } catch ( error: any ) {
    res.status(500).json({ error: 'Error al obtener los fabricantes: ' + error.message });
  }
};
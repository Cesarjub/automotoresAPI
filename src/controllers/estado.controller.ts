import { Request, Response } from 'express';
import { createEstadoOperativo, findManyEstadoOperativo } from '../service/estado.service';
import { EstadoOperativo } from '../Interfaces/estado.interface'; 

export const setEstado = async ( req: Request, res: Response ): Promise<void> => {
  const { idestadoOperativo, estadoOperativo }: EstadoOperativo = req.body;  

  try {
    const nuevoEstadoOperativo = await createEstadoOperativo({ idestadoOperativo, estadoOperativo });
    res.status(201).json(nuevoEstadoOperativo); 
  } catch ( error: any ) {
    res.status(500).json({ error: 'Error al crear el estado operativo: ' + error.message });
  }
};

export const getAllEstadoOperativo = async ( req: Request, res: Response ) => {
  try {
    const estados = await findManyEstadoOperativo();
    res.json(estados);
  } catch ( error: any ) {
    res.status(500).json({ error: 'Error al obtener los estados operativos: ' + error.message });
  }
};
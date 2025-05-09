import { Request, Response } from 'express';
import { createProyecto, findManyProyectos } from '../service/proyectos.service';
import { Proyecto } from '../Interfaces/proyectos.interface';  

export const setProyecto = async ( req: Request, res: Response ): Promise<void> => {
  const { idproyectos, nombreProyecto }: Proyecto = req.body;  

  try {
    const nuevoProyecto = await createProyecto({ idproyectos, nombreProyecto });
    res.status(201).json(nuevoProyecto); 
  } catch ( error: any ) {
    res.status(500).json({ error: 'Error al crear el proyecto: ' + error.message });
  }
};

export const getAllProyectos = async ( req: Request, res: Response ) => {
  try {
    const proyectos = await findManyProyectos();
    res.json(proyectos);
  } catch ( error: any ) {
    res.status(500).json({ error: 'Error al obtener los proyectos: ' + error.message });
  }
};
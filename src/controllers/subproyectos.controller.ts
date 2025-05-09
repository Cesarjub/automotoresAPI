import { Request, Response } from 'express';
import { createSubproyecto, findManySubproyectos } from '../service/subproyectos.service';
import { Subproyecto } from '../Interfaces/subproyectos.interface';

export const setSubproyecto = async ( req: Request, res: Response ): Promise<void> => {
  const {
    nombreSubproyecto,
    proyectos_idproyectos,
    automotor_idVehiculo,
    IRO_idIRO,
  }: Subproyecto = req.body;

  try {
    const nuevoSubproyecto = await createSubproyecto({
      nombreSubproyecto,
      proyectos_idproyectos,
      automotor_idVehiculo,
      IRO_idIRO,
    });
    res.status(201).json(nuevoSubproyecto);
  } catch ( error: any ) {
    res.status(500).json({ error: 'Error al crear el subproyecto: ' + error.message });
  }
};

export const getAllSubproyectos = async ( _req: Request, res: Response ) => {
  try {
    const subproyectos = await findManySubproyectos();
    res.json(subproyectos);
  } catch ( error: any ) {
    res.status(500).json({ message: 'Error al obtener los subproyectos', error });
  }
};
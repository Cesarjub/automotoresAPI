import { Request, Response } from 'express';
import { createIRO, findManyIro } from '../service/iro.service';
import { IRO } from '../Interfaces/iro.interface';

export const setIro = async ( req: Request, res: Response ): Promise<void> => {
  const { nombreIRO, rango_idrango }: IRO = req.body;

  try {
    const nuevoIRO = await createIRO({ nombreIRO, rango_idrango });
    res.status(201).json(nuevoIRO);
  } catch ( error: any ) {
    res.status(500).json({ error: 'Error al crear el IRO: ' + error.message });
  }
};

export const getAllIro = async ( _req: Request, res: Response ) => {
  try {
    const iros = await findManyIro();
    res.json(iros);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los IROs', error });
  }
};
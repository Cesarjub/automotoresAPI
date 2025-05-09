import { Request, Response } from 'express';
import { createUsuario, findManyUsuarios } from '../service/usuarios.service';
import { Usuario } from '../Interfaces/usuarios.interface';

export const setUsuario = async ( req: Request, res: Response ): Promise<void> => {
  const { nombreUsuario, rango_idrango }: Usuario = req.body;

  try {
    const nuevoUsuario = await createUsuario({ nombreUsuario, rango_idrango });
    res.status(201).json(nuevoUsuario);
  } catch ( error: any ) {
    res.status(500).json({ error: 'Error al crear el usuario: ' + error.message });
  }
};

export const getAllUsuarios = async ( req: Request, res: Response ) => {
  try {
    const usuarios = await findManyUsuarios();
    res.status(200).json(usuarios);
  } catch ( error: any ) {
    res.status(500).json({
      message: 'Error al obtener los usuarios',
      error: error.message,
    });
  }
};  
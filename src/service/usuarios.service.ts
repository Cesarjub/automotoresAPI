import { PrismaClient } from '@prisma/client';
import { Usuario } from '../Interfaces/usuarios.interface';

const prisma = new PrismaClient();

export const createUsuario = async ({ nombreUsuario, rango_idrango }: Usuario) => {
  try {
    const newUsuario = await prisma.usuarios.create({
      data: {
        nombreUsuario,
        rango_idrango,
      },
    });
    return newUsuario;
  } catch ( error: any ) {
    throw new Error( 'Error al crear el usuario: ' + error.message );
  }
};

export const findManyUsuarios = async () => {
  try {
    const usuarios = await prisma.usuarios.findMany({
      include: {
        rango: {
          select: {
            idrango: true,
            rango: true,
          },
        },
      },
    });
    return usuarios.map((usuario) => ({
      idUsuarios: usuario.idUsuarios,
      nombreUsuario: usuario.nombreUsuario,
      idrango: usuario.rango.idrango,
      rango: usuario.rango.rango,
    }));
  } catch ( error: any ) {
    throw new Error( 'Error al obtener los usuarios con rango: ' + error.message );
  }
};
import { PrismaClient } from '@prisma/client';
import { Descripcion } from '../Interfaces/descripcion.interface'

const prisma = new PrismaClient();

export const createDescripcion = async ({ descripcion }: Descripcion) => {
  try {
    const newDescripcion = await prisma.descripcion.create({
      data: {
        descripcion,
      },
    });
    return newDescripcion;
  } catch ( error: any ) {
    throw new Error( 'Error al crear la descripción: ' + error.message );
  }
};

export const findManyDescripciones = async () => {
  try {
    const descripciones = await prisma.descripcion.findMany();
    return descripciones;
  } catch ( error: any ) {
    throw new Error( 'Error al obtener las descripciones: ' + error.message );
  }
};
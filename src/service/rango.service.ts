import { PrismaClient } from '@prisma/client';
import { Rango } from '../Interfaces/rango.interface';

const prisma = new PrismaClient();

export const createRango = async ({ rango }: Rango) => {
  try {
    const newRango = await prisma.rango.create({
      data: {
        rango,
      },
    });
    return newRango;
  } catch ( error: any ) {
    throw new Error( 'Error al crear el rango: ' + error.message );
  }
};

export const findManyRango = async () => {
  try {
    const rangos = await prisma.rango.findMany();
    return rangos;
  } catch ( error: any ) {
    throw new Error( 'Error al obtener los rangos: ' + error.message );
  }
};
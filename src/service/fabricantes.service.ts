import { PrismaClient } from '@prisma/client';
import { Fabricante } from '../Interfaces/fabricantes.interface';

const prisma = new PrismaClient();

export const createFabricante = async ({ nombreFabricante }: Fabricante) => {
  try {
    const newFabricante = await prisma.fabricante.create({
      data: {
        nombreFabricante,
      },
    });
    return newFabricante;
  } catch ( error: any ) {
    throw new Error( 'Error al crear el fabricante: ' + error.message );
  }
};

export const findManyFabricantes = async () => {
  try {
    const fabricantes = await prisma.fabricante.findMany();
    return fabricantes;
  } catch ( error: any ) {
    throw new Error( 'Error al obtener los fabricantes: ' + error.message );
  }
};
import { PrismaClient } from '@prisma/client';
import { EstadoOperativo } from '../Interfaces/estado.interface';

const prisma = new PrismaClient();

export const createEstadoOperativo = async ({ estadoOperativo }: EstadoOperativo) => {
  try {
    const newEstadoOperativo = await prisma.estadoOperativo.create({
      data: {
        estadoOperativo,
      },
    });
    return newEstadoOperativo;
  } catch ( error: any ) {
    throw new Error( 'Error al crear el estado operativo: ' + error.message );
  }
};

export const findManyEstadoOperativo = async () => {
  try {
    const estados = await prisma.estadoOperativo.findMany();
    return estados;
  } catch ( error: any ) {
    throw new Error( 'Error al obtener los estados operativos: ' + error.message );
  }
};
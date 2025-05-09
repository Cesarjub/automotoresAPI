import { PrismaClient } from '@prisma/client';
import { Proyecto } from '../Interfaces/proyectos.interface';

const prisma = new PrismaClient();

export const createProyecto = async ({ nombreProyecto }: Proyecto) => {
  try {
    const newProyecto = await prisma.proyectos.create({
      data: {
        nombreProyecto,
      },
    });
    return newProyecto;
  } catch ( error: any ) {
    throw new Error( 'Error al crear el proyecto: ' + error.message );
  }
};

export const findManyProyectos = async () => {
  try {
    const proyectos = await prisma.proyectos.findMany();
    return proyectos;
  } catch ( error: any ) {
    throw new Error( 'Error al obtener los proyectos: ' + error.message );
  }
};

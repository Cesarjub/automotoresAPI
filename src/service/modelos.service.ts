import { PrismaClient } from '@prisma/client';
import { ModeloAutomotor } from '../Interfaces/modelos.interface';

const prisma = new PrismaClient();

export const createModeloAutomotor = async ( data: ModeloAutomotor ) => {
  try {
    const nuevoModeloAutomotor = await prisma.modeloAutomotor.create({
      data,
    });
    return nuevoModeloAutomotor;
  } catch ( error: any ) {
    throw new Error( 'Error al crear el modelo de automotor: ' + error.message );
  }
};

export const findManyModelos = async () => {
  try {
    const modelos = await prisma.modeloAutomotor.findMany({
      include: {
        descripcion: {
          select: {
            descripcion: true,
          },
        },
        fabricanteModel: {
          select: {
            nombreFabricante: true,
          },
        },
      },
    });

    return modelos.map((modelo) => ({
      idmodeloAutomotor: modelo.idmodeloAutomotor,
      modelo: modelo.modelo,
      fechaCreacion: modelo.fechaCreacion,

      // ID
      Descripcion_idDescripcion: modelo.Descripcion_idDescripcion,
      fabricante_idfabricante: modelo.fabricante_idfabricante,

      //
      descripcion: modelo.descripcion?.descripcion,
      nombreFabricante: modelo.fabricanteModel?.nombreFabricante,
    }));
  } catch ( error: any ) {
    throw new Error( 'Error al obtener los modelos automotor: ' + error.message );
  }
};

import { PrismaClient } from '@prisma/client';
import { Subproyecto } from '../Interfaces/subproyectos.interface';

const prisma = new PrismaClient();

export const createSubproyecto = async ( data: Subproyecto ) => {
  try {
    const nuevoSubproyecto = await prisma.subproyectos.create({
      data,
    });
    return nuevoSubproyecto;
  } catch ( error: any ) {
    throw new Error( 'Error al crear el subproyecto: ' + error.message );
  }
};

export const findManySubproyectos = async () => {
  try {
    const subproyectos = await prisma.subproyectos.findMany({
      include: {
        proyecto: {
          select: {
            nombreProyecto: true,
          },
        },
        automotor: {
          select: {
            noSerie: true,
            noControl: true,
          },
        },
        iro: {
          select: {
            nombreIRO: true,
          },
        },
      },
    });

    return subproyectos.map((sub) => ({
      idsubproyectos: sub.idsubproyectos,
      nombreSubproyecto: sub.nombreSubproyecto,

      // ID
      proyectos_idproyectos: sub.proyectos_idproyectos,
      automotor_idVehiculo: sub.automotor_idVehiculo,
      IRO_idIRO: sub.IRO_idIRO,

      //
      nombreProyecto: sub.proyecto?.nombreProyecto,
      noSerie: sub.automotor?.noSerie,
      noControl: sub.automotor?.noControl,
      nombreIRO: sub.iro?.nombreIRO,
    }));
  } catch ( error: any ) {
    throw new Error( 'Error al obtener los subproyectos: ' + error.message );
  }
};
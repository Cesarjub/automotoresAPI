import { PrismaClient } from '@prisma/client';
import { IRO } from '../Interfaces/iro.interface';

const prisma = new PrismaClient();

export const createIRO = async ({ nombreIRO, rango_idrango }: IRO) => {
  try {
    const newIRO = await prisma.iRO.create({
      data: {
        nombreIRO,
        rango_idrango,
      },
    });
    return newIRO;
  } catch ( error: any ) {
    throw new Error( 'Error al crear el IRO: ' + error.message );
  }
};

export const findManyIro = async () => {
  try {
    const iros = await prisma.iRO.findMany({
      include: {
        rango: {
          select: {
            idrango: true,
            rango: true,
          },
        },
      },
    });

    return iros.map((iro) => ({
      idIRO: iro.idIRO,
      nombreIRO: iro.nombreIRO,
      idrango: iro.rango?.idrango,
      rango: iro.rango?.rango,
    }));
  } catch ( error: any ) {
    throw new Error( 'Error al obtener los IROs: ' + error.message );
  }
};
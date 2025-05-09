import { PrismaClient } from '@prisma/client';
import { AutomotorInput } from '../Interfaces/automotores.interface';

const prisma = new PrismaClient();

export const createAutomotor = async ( data: AutomotorInput ) => {
  try {
    const newAutomotor = await prisma.automotor.create({
      data: {
        noSerie: data.noSerie,
        noControl: data.noControl,
        imagen: data.imagen ?? null,
        latitude: data.latitude,
        longitude: data.longitude,
        direccion: data.direccion,
        proveedores_idproveedores: data.proveedores_idproveedores,
        modeloAutomotor_idmodeloAutomotor: data.modeloAutomotor_idmodeloAutomotor,
        estadoOperativo_idestadoOperativo: data.estadoOperativo_idestadoOperativo,
        Usuarios_idUsuarios: data.Usuarios_idUsuarios,
      },
    });

    return newAutomotor;
  } catch ( error: any ) {
    throw new Error( 'Error al crear el automotor: ' + error.message );
  }
};

export const findManyAutomotores = async () => {
  try {
    const automotores = await prisma.automotor.findMany({
      include: {
        proveedor: {
          select: {
            nombreProveedor: true,
          },
        },
        modelo: {
          select: {
            modelo: true,
          },
        },
        estado: {
          select: {
            estadoOperativo: true,
          },
        },
        usuario: {
          select: {
            nombreUsuario: true,
          },
        },
      },
    });

    return automotores.map((auto) => ({
      idVehiculo: auto.idVehiculo,
      noSerie: auto.noSerie,
      noControl: auto.noControl,
      imagen: auto.imagen ? Buffer.from(auto.imagen).toString('base64') : null,
      latitude: auto.latitude,
      longitude: auto.longitude,
      direccion: auto.direccion,

      // ID
      proveedores_idproveedores: auto.proveedores_idproveedores,
      modeloAutomotor_idmodeloAutomotor: auto.modeloAutomotor_idmodeloAutomotor,
      estadoOperativo_idestadoOperativo: auto.estadoOperativo_idestadoOperativo,
      Usuarios_idUsuarios: auto.Usuarios_idUsuarios,

      //
      nombreProveedor: auto.proveedor?.nombreProveedor,
      modelo: auto.modelo?.modelo,
      estadoOperativo: auto.estado?.estadoOperativo,
      nombreUsuario: auto.usuario?.nombreUsuario,
    }));
  } catch ( error: any ) {
    throw new Error( 'Error al obtener los automotores: ' + error.message );
  }
};
import { PrismaClient } from '@prisma/client';
import { Proveedor } from '../Interfaces/proveedores.interface';

const prisma = new PrismaClient();

export const createProveedor = async ({ nombreProveedor }: Proveedor) => {
  try {
    const newProveedor = await prisma.proveedores.create({
      data: { nombreProveedor },
    });
    return newProveedor;
  } catch (error: any ) {
    throw new Error( 'Error al crear el proveedor: ' + error.message );
  }
};

export const findManyProveedores = async () => {
  try {
    const proveedores = await prisma.proveedores.findMany();
    return proveedores;
  } catch ( error: any ) {
    throw new Error( 'Error al obtener los proveedores: ' + error.message );
  }
};

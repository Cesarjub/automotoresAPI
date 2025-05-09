export interface AutomotorInput {
    noSerie: string;
    noControl: string;
    imagen: Buffer | null;
    latitude: string;
    longitude: string;
    direccion: string;
    proveedores_idproveedores: number;
    modeloAutomotor_idmodeloAutomotor: number;
    estadoOperativo_idestadoOperativo: number;
    Usuarios_idUsuarios: number;
}
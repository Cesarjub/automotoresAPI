import env from './callenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import routeDescripcion from '../routes/descripcion.route';
import routeProveedor from '../routes/proveedores.route';
import routeRango from '../routes/rango.route';
import routeProyectos from '../routes/proyectos.route';
import routeEstadoOperativo from '../routes/estado.route';
import routeFabricantes from '../routes/fabricantes.route';
import routeUsuarios from '../routes/usuarios.route';
import routeIro from '../routes/iro.route';
import routeSubproyecto from '../routes/subproyectos.route';
import routeModelo from '../routes/modelos.route';
import routeAutomotor from '../routes/automotores.route';

class Server {

    public app: express.Application;
    private port: string | number;
    readonly routePath = '/automotores/api';
    public service: express.Application;

    constructor() {
        this.app = express();
        this.port = env.PORT || 3000;
        this.configuration();
        this.middlewares();
        this.routes();
        this.service = this.app
    }

    configuration() {
        this.app.use(express.json());
        this.app.set( 'port', this.port );
    }

    middlewares() {
        this.app.use( helmet() );
        this.app.use( helmet.hidePoweredBy() );
        this.app.use( express.json() );
        this.app.use( express.urlencoded({ extended: true }) );
        this.app.use( cors() );
    }

    routes() {
        this.app.use( this.routePath, routeDescripcion );
        this.app.use( this.routePath, routeProveedor );
        this.app.use( this.routePath, routeRango );
        this.app.use( this.routePath, routeProyectos );
        this.app.use( this.routePath, routeEstadoOperativo );
        this.app.use( this.routePath, routeFabricantes );
        this.app.use( this.routePath, routeUsuarios );
        this.app.use( this.routePath, routeIro );
        this.app.use( this.routePath, routeSubproyecto );
        this.app.use( this.routePath, routeModelo );
        this.app.use( this.routePath, routeAutomotor );
        this.app.get('/', (req: any, res: any) => {
            res.send('Lambda initialized');
        });
    }

    output(): void{
        this.app.get('/', (req, res) => {
          res.send('Servicio funcionando');
        });
    }

    getService(): express.Application {
        return this.service
    }

    private listen() {
        this.app.listen( this.port, () => console.log( `Server listening on ${ this.port }` ) );
    }

    public async start() {
        this.listen();
    }

    /*public async stop() {
    }*/

}

export const server = new Server();
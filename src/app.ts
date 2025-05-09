import { server } from './config/server';
import serverlessExpress from '@vendia/serverless-express';

/*
server.start();

process.on('SIGINT', async () => {
    console.log('Server shutting down...');
    await server.stop();
    process.exit(0);
});*/

//export const handler = server.app;
export const handler = serverlessExpress({ app: server.app });
'use strict';

const Hapi = require('@hapi/hapi');
const Routes = require('./Routes');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const db = require('./database').db;


const init = async () => {
    const server = Hapi.server({
        port: process.env.PORT,
        host: process.env.HOST
    });

    const swaggerOptions = {
        documentationPath: '/',
        info: {
            title: 'Books API Documentation',
            version: '0.0.1',
        }
    };

    await server.register([
       Inert,
       Vision,
       {
           plugin: HapiSwagger,
           options: swaggerOptions
       }
   ]);

    await server.start();
    console.log('Server running on %s', server.info.uri);
    server.route(Routes);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();

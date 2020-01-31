'use strict';

const Hapi = require('@hapi/hapi');
const Routes = require('./Routes');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const Mongoose = require('Mongoose');


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

    Mongoose.connect(`${process.env.DB_CONN_STRING}`);

    await server.start();
    console.log('Server running on %s', server.info.uri);
    server.route(Routes);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();

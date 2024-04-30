import { Server } from "@server/server";
import Fastify from 'fastify';

const app = new Server(
    Fastify({logger: true}), 
    process.env.SERVER_PORT
);

app.start();
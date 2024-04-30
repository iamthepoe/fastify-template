import { describe, it, before, after } from 'node:test';
import { ok } from 'node:assert';

import Fastify from 'fastify';
import { Server } from '@server/server';
import { SERVER_PORT } from './constants';


describe('Server Initialization', () => {
    let app: Server;
    
    before(()=>{
        app = new Server(Fastify(), SERVER_PORT);
        app.start();
    });

    it('should start the server', () => {
        ok(app, 'Server is defined.');
    });

    after(()=>{
        app.stop();
    });
});


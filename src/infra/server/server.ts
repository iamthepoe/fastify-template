import { FastifyInstance } from "fastify"

export class Server{
    constructor(
        private readonly app: FastifyInstance,
        private readonly port: number
    ){}

    private setupRoutes(){
        this.app.get('/', _=> { hello: 'world'} );
    }

    public start(){
        try{
            this.setupRoutes();
            return this.app.listen({ port: this.port });
        }catch(err){
            this.app.log.error(err);
            process.exit(1);
        }
    }

    public stop(){
        this.app.close().then(_=> process.exit(0));
    }
}
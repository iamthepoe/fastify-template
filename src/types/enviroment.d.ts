declare global {
    namespace NodeJS {
        interface ProcessEnv {
            SERVER_PORT: number;
            DATABASE_URL: string;
        }
    }
}

export {};
export {};
import { Dialect } from 'sequelize/types/sequelize';

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            JWT_ACCESS_SECRET: string;
            JWT_REFRESH_SECRET: string;
            APP_PORT: number;
            BOT_TOKEN: string;
            MONGO_URL: string;
            ORIGIN_URL: string;
            SERVER_URL: string;
            POSTGRE_NAME: string;
            DB_NAME: string;
            DB_USER: string;
            DB_PASSWORD: string;
            DB_HOST: string;
            DB_PORT: number | undefined;
            DB_DIALECT: Dialect | undefined;
            ENV: 'test' | 'dev' | 'prod';
        }
    }
}

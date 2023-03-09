import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const NAME = process.env.DB_NAME || '';
const USER = process.env.DB_USER || 'postgres';
const PASSWORD = process.env.DB_PASSWORD || '';
const HOST = process.env.DB_HOST || 'localhost';
const PORT = 5432;

export const sequelize = new Sequelize(
	NAME,
	USER,
	PASSWORD,
	{ 
		dialect: 'postgres',
		host: HOST,
		port: PORT
	}
);
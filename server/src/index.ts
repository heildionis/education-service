import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import cookieParser from 'cookie-parser';
import { Telegraf } from 'telegraf';

import { TelegramContext } from 'types/telegram';
import { sequelize } from './db';
import { router } from './routes';
import { errorHandler } from './middlewares/errorHandler';
import * as models from './models/models';

dotenv.config();

const PORT = process.env.APP_PORT || 5000;
const ORIGIN = process.env.ORIGIN_URL || 'http://localhost:3000';
const BOT_TOKEN = process.env.BOT_TOKEN || '5842709540:AAEK-Xj4vrMpZQyEPl0Feocowmh4yLmDPM0';

export const staticPath = path.resolve(__dirname, 'static');

const bot = new Telegraf<TelegramContext>(BOT_TOKEN);
const app = express();

app.use(cors({ origin: ORIGIN, credentials: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(staticPath));
app.use(fileUpload({}));
app.use(cookieParser());
app.use('/api', router);
app.use(errorHandler);

app.get('/', (req, res) => {
	console.log('GET');
	res.send(200).json({ message: 'hello'});
});

const start = async () => {
	try {
		// await sequelize.authenticate();
		// await sequelize.sync();
		app.listen(PORT, () => {
			console.log(colors.blue(`Server started on PORT: ${PORT}`));
		});
		bot.launch();
	} catch (error) {
		console.log(colors.yellow(`Start error ${error}`));
	}
};

start();
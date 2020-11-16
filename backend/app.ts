import dotenv from 'dotenv';
dotenv.config();

import express, {NextFunction, Request, Response} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import {ResponseError} from './types';
import createDb from './db/createDb';
import configControllers from './controllers';

async function start() {
    await createDb;
    await import('./db/connection').then(module => module.default.sync());

    const app = express();

    app.use(cors({
        exposedHeaders: ['Authorization'],
        credentials: true,
        origin: process.env.ORIGIN,
    }));
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(compression());
    app.use(helmet());

    configControllers(app);

    app.use((err: ResponseError, req: Request, res: Response, next: NextFunction) => {
        if (err.name == 'ValidationError' || err.name === 'TypeError')
            return res.status(400).send({error: err.message});
        res.status(err.status || 500).send({error: err.message});
    });

    app.listen(process.env.PORT);
}

start();
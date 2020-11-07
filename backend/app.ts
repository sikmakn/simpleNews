import dotenv from 'dotenv';
dotenv.config();

import express, {NextFunction, Request, Response} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import {ResponseError} from './types';
import createDb from "./db/createDb";

async function start() {
    await createDb;
    await import('./db/connection').then(module => module.default.sync());

    const app = express();

    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(compression());
    app.use(helmet());

    app.use((err: ResponseError, req: Request, res: Response, next: NextFunction) => {
        if (err.name == 'ValidationError' || err.name === 'TypeError')
            return res.status(400).send({error: err.message});
        res.status(err.status || 500).send({error: err.message});
    });

    app.listen(process.env.PORT);
}

start();
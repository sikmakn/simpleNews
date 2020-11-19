import {Express} from 'express';
import userController from './userController';
import newsController from './newsController';

export default function configControllers(app: Express) {
    app.use('/user', userController);
    app.use('/news', newsController);
}
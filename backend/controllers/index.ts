import {Express} from 'express';
import userController from './userController';
import newsController from './newsController';
import likeController from './likeController';

export default function configControllers(app: Express) {
    app.use('/user', userController);
    app.use('/news', newsController);
    app.use('/like', likeController);
}
import {Express} from 'express';
import userController from './userController';

export default function configControllers(app: Express) {
    app.use('/user', userController);
}
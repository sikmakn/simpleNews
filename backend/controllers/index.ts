import {Express} from 'express';
import userController from './userController';
import newsController from './newsController';
import likeController from './likeController';
import commentController from './commentController';
import subCommentController from './subCommentController';

export default function configControllers(app: Express) {
    app.use('/user', userController);
    app.use('/news', newsController);
    app.use('/like', likeController);
    app.use('/comment', commentController);
    app.use('/subcomment', subCommentController);
}
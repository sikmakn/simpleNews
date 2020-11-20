import multer from 'multer';
import * as newsService from '../services/newsService';
import {Router} from 'express';
import authValidateMiddleware from '../helpers/authValidateMiddleware';
import {getAccessTokenFromResponse} from '../helpers/tokens';
import * as authService from '../services/authService';
import authTokensUpdateMiddleware from '../helpers/authTokensUpdateMiddleware';

const upload = multer({storage: multer.memoryStorage()})

const router = Router();

router.post('/create',
    upload.single('img'),
    authValidateMiddleware,
    async (req, res) => {
        const accessToken = getAccessTokenFromResponse(res);
        const {username: authorId} = authService.decode(accessToken!)!.payload;
        const {id, title, text, imgSrc, date, tag} = await newsService.create({...req.body, authorId});
        res.json({id, title, text, imgSrc, authorId, date, tag});
    });

router.get('/:id',
    authTokensUpdateMiddleware,
    async (req, res) => {
        const accessToken = getAccessTokenFromResponse(res);
        let userId: string | undefined;
        if (accessToken)
            ({username: userId} = authService.decode(accessToken!)!.payload);
        const {
            id,
            title,
            text,
            imgSrc,
            date,
            tag,
            commentsCount,
            subCommentsCount,
            userSubCommentsCount,
            likesCount,
            userLikesCount,
            userCommentsCount,
        } = await newsService.findOne({id: req.params.id, userId});

        res.json({
            id, title, text, imgSrc, date, tag,
            statistic: {
                commentsCount: commentsCount + subCommentsCount,
                likesCount
            },
            userStatistic: {
                isLiked: !!userLikesCount,
                isCommented: !!userCommentsCount && !!userSubCommentsCount,
            },
        });
    });

export default router;
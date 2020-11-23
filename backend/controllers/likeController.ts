import {Router} from 'express';
import authValidateMiddleware from '../helpers/authValidateMiddleware';
import getUsernameFromResponse from '../helpers/getUsernameFromResponse';
import * as likeService from '../services/likeService';
import * as newsService from '../services/newsService';

const router = Router();

router.put('/:oneNewsId',
    authValidateMiddleware,
    async (req, res) => {
        const {oneNewsId} = req.params;
        if (!await newsService.findBasicById(oneNewsId))
            return res.status(404).json({error: 'OneNews not found'});

        const authorId = getUsernameFromResponse(res)!;
        const value = await likeService.updateLike({authorId, oneNewsId});
        res.status(201).json({value});
    });

export default router;
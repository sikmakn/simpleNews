import {Router} from 'express';
import authTokensUpdateMiddleware from '../helpers/authTokensUpdateMiddleware';
import * as commentService from '../services/commentService';
import * as newsService from '../services/newsService';
import authValidateMiddleware from '../helpers/authValidateMiddleware';
import getUsernameFromResponse from '../helpers/getUsernameFromResponse';

const router = Router();

router.get('/:oneNewsId',
    authTokensUpdateMiddleware,
    async (req, res) => {
        const {oneNewsId} = req.params;
        const comments = await commentService.findMany(oneNewsId);
        res.json(comments.map(({id, text, authorId, oneNewsId, author}: any) =>
            ({id, text, authorId, oneNewsId, author})));
    });

router.post('/:oneNewsId',
    authValidateMiddleware,
    async (req, res) => {
        const authorId = getUsernameFromResponse(res)!;
        const {oneNewsId} = req.params;
        const {text} = req.body;

        if (!text)
            return res.status(404).json({error: 'text can not be empty'});
        if (!await newsService.findBasicById(oneNewsId))
            return res.status(404).json({error: 'oneNews not found'});

        const {id} = await commentService.create({authorId, text, oneNewsId});
        const result = await commentService.findById(id);
        res.json({
            id: result?.id,
            text: result?.text,
            authorId: result?.authorId,
            oneNewsId: result?.oneNewsId,
            author: result?.author,
        });
    });

router.put('/:id',
    authValidateMiddleware,
    async (req, res) => {
        const authorId = getUsernameFromResponse(res)!;
        const {id} = req.params;
        const {text} = req.body;

        if (!text)
            return res.status(404).json({error: 'text can not be empty'});
        const oldComment = await commentService.findByIdBasic(id);
        if (!oldComment)
            return res.status(404).json({error: 'comment not found'});
        if (oldComment.authorId !== authorId)
            return res.status(403).json({error: 'you are not allowed to edit other\'s comment'});

        await commentService.update({id, text});
        const result = await commentService.findById(id);
        res.json({
            id: result?.id,
            text: result?.text,
            authorId: result?.authorId,
            oneNewsId: result?.oneNewsId,
            author: result?.author,
        });
    });

export default router;
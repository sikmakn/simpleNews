import {Router} from 'express';
import authTokensUpdateMiddleware from '../helpers/authTokensUpdateMiddleware';
import * as subCommentService from '../services/subCommentService';
import * as commentService from '../services/commentService';
import getUsernameFromResponse from '../helpers/getUsernameFromResponse';
import * as newsService from '../services/newsService';
import * as userService from '../services/userService';

const router = Router();

router.get('/:commentId',
    authTokensUpdateMiddleware,
    async (req, res) => {
        const {commentId} = req.params;
        const comments = await subCommentService.findMany(commentId);
        res.json(comments.map(({id, text, authorId, oneNewsId, author, answerTo}: any) =>
            ({id, text, authorId, oneNewsId, author, answerTo})));
    });

router.post('/:commentId',
    authTokensUpdateMiddleware,
    async (req, res) => {
        const authorId = getUsernameFromResponse(res)!;
        const {commentId} = req.params;
        const {text, oneNewsId, answerToId} = req.body;

        if (!text)
            return res.status(404).json({error: 'text can not be empty'});
        if (!oneNewsId)
            return res.status(404).json({error: 'oneNewsId can not be empty'});
        if (!await newsService.findBasicById(oneNewsId))
            return res.status(404).json({error: 'oneNews not found'});
        if (!await commentService.findByIdBasic(commentId))
            return res.status(404).json({error: 'comment not found'});
        if (answerToId && !await userService.find(answerToId))
            return res.status(404).json({error: 'answerTo user not found'});

        const {id} = await subCommentService.create({text, commentId, authorId, oneNewsId, answerToId});
        const result = await subCommentService.findById(id);
        res.json({
            id: result?.id,
            text: result?.text,
            commentId: result?.commentId,
            oneNewsId: result?.oneNewsId,
            authorId: result?.authorId,
            author: result?.author,
            answerToId: result?.answerToId,
            answerTo: result?.answerTo,
        })
    });

router.put('/:id',
    authTokensUpdateMiddleware,
    async (req, res) => {
        const authorId = getUsernameFromResponse(res)!;
        const {id} = req.params;
        const {text} = req.body;

        if(!text)
            return res.status(404).json({error: 'text can not be empty'});
        const oldSubComment = await subCommentService.findBasicById(id);
        if(!oldSubComment)
            return res.status(400).json({error:'subComment not found'});
        if(oldSubComment.authorId !== authorId)
            return res.status(403).json({error: 'you are not allowed to edit other\'s comment'});

        await subCommentService.update({id, text});
        const result = await subCommentService.findById(id);
        res.json({
            id: result?.id,
            text: result?.text,
            commentId: result?.commentId,
            oneNewsId: result?.oneNewsId,
            authorId: result?.authorId,
            author: result?.author,
            answerToId: result?.answerToId,
            answerTo: result?.answerTo,
        })
    });

export default router;
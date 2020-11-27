import multer from 'multer';
import * as newsService from '../services/newsService';
import {Router} from 'express';
import authValidateMiddleware from '../helpers/authValidateMiddleware';
import authTokensUpdateMiddleware from '../helpers/authTokensUpdateMiddleware';
import getUsernameFromResponse from '../helpers/getUsernameFromResponse';
import {Tag} from '../types';
import mapOneNewsToOut from '../helpers/mapOneNewsToOut';

const upload = multer({storage: multer.memoryStorage()});

const router = Router();

router.post('/create',
    upload.single('img'),
    authValidateMiddleware,
    async (req, res) => {
        const authorId = getUsernameFromResponse(res);
        const {id, title, text, imgSrc, date, tag} =
            await newsService.create({...req.body, authorId});
        res.json({id, title, text, imgSrc, authorId, date, tag});
    });

router.put('/update/:id',
    upload.single('img'),
    authValidateMiddleware,
    async (req, res) => {
        const username = getUsernameFromResponse(res);
        const {id} = req.params;
        const result = await newsService.findBasicById(id);
        if (!result)
            return res.status(404).json({error: 'OneNews not found'});
        if (username !== result.authorId)
            return res.status(403).json({error: 'you are not the author'});

        await newsService.update({...req.body, img: req.file});
        const oneNews = await newsService.findOne({id, userId: username});
        res.json(mapOneNewsToOut(oneNews));
    });

router.get('/manyBasic',
    authTokensUpdateMiddleware,
    async (req, res) => {
        const findParams: any = {
            from: req.query.from,
            to: req.query.to,
            sort: req.query.sort,
        };
        const news = await newsService.findManyBasic(findParams);
        res.json(news.map(({id, title, text, date}: any) =>
            ({id, title, date, description: text.substr(0, 100)})));
    });

router.get('/many',
    authTokensUpdateMiddleware,
    async (req, res) => {
        const username = getUsernameFromResponse(res);
        const findParams: any = {
            from: req.query.from,
            to: req.query.to,
            sort: req.query.sort,
            username,
        };
        if (req.query.tag)
            findParams.tag = req.query.tag as Tag;
        const news = await newsService.findMany(findParams);
        res.json(news.map((n: any) => {
            const {text, ...mappedNews} = mapOneNewsToOut(n);
            return {...mappedNews, description: text.substr(0, 100)};
        }));
    });

router.get('/one/:id',
    authTokensUpdateMiddleware,
    async (req, res) => {
        const userId = getUsernameFromResponse(res);
        const oneNews = await newsService.findOne({id: req.params.id, userId});
        if (!oneNews) return res.status(404).json({error: 'not found news with this id'});
        res.json(mapOneNewsToOut(oneNews));
    });

export default router;
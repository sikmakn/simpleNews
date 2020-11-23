import {Router} from 'express';
import authTokensUpdateMiddleware from '../helpers/authTokensUpdateMiddleware';

const router = Router();

router.get('/:commentId',
    authTokensUpdateMiddleware,
    async (req, res) => {

    });

router.post('/:commentId',
    authTokensUpdateMiddleware,
    async (req, res) => {

    });

router.put('/:id',
    authTokensUpdateMiddleware,
    async (req, res)=>{

    });

export default router;
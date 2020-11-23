import {Router} from 'express';
import authTokensUpdateMiddleware from '../helpers/authTokensUpdateMiddleware';

const router = Router();

router.get('/:oneNewsId',
    authTokensUpdateMiddleware,
    async (req, res) => {

    });

router.post('/:oneNewsId',
    authTokensUpdateMiddleware,
    async (req, res) => {

    });

router.put('/:id',
    authTokensUpdateMiddleware,
    async (req, res)=>{

    });

export default router;
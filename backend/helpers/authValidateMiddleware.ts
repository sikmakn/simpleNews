import {NextFunction, Request, Response} from 'express';
import {updateTokens} from '../services/authService';
import {getTokens, setTokens} from './tokens';

export default async function authValidateMiddleware(req: Request, res: Response, next: NextFunction) {
    const {accessToken, refreshToken} = getTokens(req);
    if (!refreshToken && !accessToken)
        return res.send(401).json({error: 'unauthorized'});

    const tokens = await updateTokens({accessToken, refreshToken});
    if (!tokens)
        return res.send(401).json({error: 'unauthorized'});

    setTokens({res, ...tokens});
    next();
}
import {NextFunction, Request, Response} from 'express';
import {updateTokens} from '../services/authService';
import {getTokens, setTokens} from './tokens';

export default async function authTokensUpdateMiddleware(req: Request, res: Response, next: NextFunction) {
    const {accessToken, refreshToken} = getTokens(req);
    if (!refreshToken && !accessToken)
        return next();

    const tokens = await updateTokens({accessToken, refreshToken});
    if (!tokens)
        return next();

    setTokens({res, ...tokens});
    next();
}
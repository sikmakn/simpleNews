import {Request, Response} from 'express';

export function setRefreshToken({res, refreshToken}: { res: Response, refreshToken: string }) {
    res.cookie('Authorization', `Bearer ${refreshToken}`, {
        httpOnly: true,
        // sameSite: true
    });
}

export function setAccessToken({res, accessToken}: { res: Response, accessToken: string }) {
    res.set('Authorization', `Bearer ${accessToken}`);
}

export function setTokens({res, accessToken, refreshToken}: { res: Response, accessToken: string, refreshToken: string }) {
    res.cookie('Authorization', `Bearer ${refreshToken}`, {
        httpOnly: true,
        // sameSite: true
    });
    res.set('Authorization', `Bearer ${accessToken}`);
}

export function getTokens(req: Request) {
    return {
        accessToken: getAccessToken(req),
        refreshToken: getRefreshToken(req),
    };
}

export function getRefreshToken(req: Request) {
    return req.cookies.Authorization?.split(' ')[1];
}

export function getAccessToken(req: Request) {
    return req.headers.authorization?.split(' ')[1]
}
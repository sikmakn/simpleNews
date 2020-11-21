import {Response} from 'express';
import {getAccessTokenFromResponse} from './tokens';
import * as authService from '../services/authService';

export default function getUsernameFromResponse(res: Response) {
    const accessToken = getAccessTokenFromResponse(res);
    let userId: string | undefined;
    if (accessToken)
        ({username: userId} = authService.decode(accessToken!)!.payload);
    return userId;
}
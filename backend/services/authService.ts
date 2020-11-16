import jwt from 'jsonwebtoken';

const {
    JWT_ACCESS_SECRET,
    JWT_ACCESS_EXPIRES_HOURS,
    JWT_REFRESH_SECRET,
    JWT_REFRESH_EXPIRES_HOURS
} = process.env;

export async function createToken(username: string) {
    const accessToken = jwt.sign({username},
        JWT_ACCESS_SECRET as string,
        {expiresIn: JWT_ACCESS_EXPIRES_HOURS});
    const refreshToken = jwt.sign({username},
        JWT_REFRESH_SECRET as string,
        {expiresIn: JWT_REFRESH_EXPIRES_HOURS});
    return {accessToken, refreshToken};
}

export function decode(token: string) {
    return jwt.decode(token, {json: true, complete: true});
}

export async function updateTokens(
    {
        refreshToken,
        accessToken
    }: {
        refreshToken: string,
        accessToken?: string
    }) {
    const {value: accessValue} = await validToken({token: accessToken, secret: JWT_ACCESS_SECRET!});
    if (accessValue) return {
        accessToken: jwt.sign({username: accessValue.username},
            JWT_REFRESH_SECRET as string,
            {expiresIn: JWT_REFRESH_EXPIRES_HOURS}),
        refreshToken,
    };
    const {value: refreshValue} = await validToken({token: refreshToken, secret: JWT_REFRESH_SECRET!});
    if (refreshToken) return {
        refreshToken: jwt.sign({username: refreshValue.username},
            JWT_REFRESH_SECRET as string,
            {expiresIn: JWT_REFRESH_EXPIRES_HOURS}),
        accessToken: jwt.sign({username: refreshValue.username},
            JWT_REFRESH_SECRET as string,
            {expiresIn: JWT_REFRESH_EXPIRES_HOURS}),
    };

    function validToken({token, secret}: { token?: string, secret: string }):
        Promise<{ error?: Error, value?: any }> {
        return new Promise(res => {
            if (!token)
                return res({error: new Error('token not exist')});
            jwt.verify(token, secret as string, ((error, decoded) => {
                if (error) return res({error});//todo проверяет ли время устаревания
                res({value: decoded});
            }));
        });
    }

}
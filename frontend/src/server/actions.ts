import {clearUser} from '../store/user/actions';

let accessToken = '';

export function POST(path: string, body: any, dispatch: any) {
    return request('POST', path, body, dispatch);
}

export function PUT(path: string, body: any, dispatch: any) {
    return request('PUT', path, body, dispatch);
}

export function GET(path: string, dispatch: any) {
    return fetch(process.env.REACT_APP_SERVER_URL + path, {credentials: 'include'})
        .then(res => {
            //todo add 404 and 500
            accessToken = res.headers.get('authorization') ?? '';
            if (!accessToken) dispatch(clearUser());
            return res.ok ? res : Promise.reject(res)
        });
}

export function request(method: 'POST' | 'PUT', path: string, body: any, dispatch: any) {
    return fetch(process.env.REACT_APP_SERVER_URL + path, {
        method: method,
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        },
        credentials: 'include',
        body: JSON.stringify(body),
    }).then(res => {
        accessToken = res.headers.get('authorization') ?? '';
        if (!accessToken) dispatch(clearUser());
        return res.ok ? res : Promise.reject(res)
    });
}
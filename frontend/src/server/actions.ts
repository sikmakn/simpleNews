import copyObjectWithoutUndefined from '../helpers/copyObjectWithoutUndefined';
import mapObjectToFormData from '../helpers/mapObjectToFormData';
import {clearUser} from '../store/user/actions';

let accessToken = '';

export function POSTForm(path: string, body: any, dispatch: any) {
    const fullBody = copyObjectWithoutUndefined(body);
    const formBody = mapObjectToFormData(fullBody);
    return request({method: 'POST', path, body: formBody, dispatch});
}

export function POST(path: string, body: any, dispatch: any) {
    const fullBody = copyObjectWithoutUndefined(body);
    return request({
        method: 'POST',
        path,
        body: JSON.stringify(fullBody),
        dispatch,
        contentType: 'application/json',
    });
}

export function PUTForm(path: string, body: any, dispatch: any) {
    const fullBody = copyObjectWithoutUndefined(body);
    const formBody = mapObjectToFormData(fullBody);
    return request({method: 'PUT', path, body: formBody, dispatch});
}

export function PUT(path: string, body: any, dispatch: any) {
    const fullBody = copyObjectWithoutUndefined(body);
    return request({
        method: 'PUT',
        path,
        body: JSON.stringify(fullBody),
        dispatch,
        contentType: 'application/json',
    });
}

export function GET(path: string, dispatch: any) {
    return fetch(process.env.REACT_APP_SERVER_URL + path, {credentials: 'include'})
        .then(res => {
            accessToken = res.headers.get('authorization') ?? '';
            if (!accessToken) dispatch(clearUser());
            return res.ok ? res : Promise.reject(res)
        })
        .then(res => res.json());
}

export function request(
    {method, dispatch, path, body, contentType}:
        {
            method: 'POST' | 'PUT',
            path: string,
            body: any,
            dispatch: any,
            contentType?: string
        }) {

    const headers: any = {
        'Authorization': accessToken
    };
    if (contentType) headers['Content-type'] = contentType;

    return fetch(process.env.REACT_APP_SERVER_URL + path,
        {method, headers, body, mode: 'cors', credentials: 'include'})
        .then(res => {
            accessToken = res.headers.get('authorization') ?? '';
            if (!accessToken) dispatch(clearUser());
            return res.ok ? res : Promise.reject(res)
        })
        .then(res => res.json());
}
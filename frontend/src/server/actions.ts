let accessToken = '';

export function POST(path: string, body: any) {
    return request('POST', path, body);
}

export function PUT(path: string, body: any) {
    return request('PUT', path, body);
}

export function GET(path: string) {
    return fetch(path, {credentials: 'include'})
        .then(res => {
            accessToken = res.headers.get('authorization') ?? '';
            return res.ok ? res : Promise.reject(res)
        });
}

export function request(method: 'POST' | 'PUT', path: string, body: any) {
    return fetch(process.env.REACT_APP_SERVER_URL + path, {
        method: 'method',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        },
        credentials: 'include',
        body: JSON.stringify(body),
    }).then(res => {
        accessToken = res.headers.get('authorization') ?? '';
        return res.ok ? res : Promise.reject(res)
    }).then(res => res.json());
}
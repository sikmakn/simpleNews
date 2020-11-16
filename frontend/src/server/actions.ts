let accessToken = '';

export function POST(path: string, body: any) {
    return fetch(process.env.REACT_APP_SERVER_URL + path, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        },
        credentials: 'include',
        body: JSON.stringify(body),
    }).then(res => {
        res.headers.forEach((k, v)=>console.log(k+' + '+ v))
        accessToken = res.headers.get('authorization') ?? '';
        return res.ok ? res : Promise.reject(res)
    }).then(res => res.json());
}

export function PUT(path: string, body: any) {
    return fetch(process.env.REACT_APP_SERVER_URL + path, {
        method: 'PUT',
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
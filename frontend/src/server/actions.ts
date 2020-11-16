let accessToken = '';

export function POST(path: string, body: any) {
    return fetch(process.env.REACT_APP_SERVER_URL + path, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        },
        body: JSON.stringify(body),
    }).then(res => {
        accessToken = res.headers.get('authorization') ?? '';
        return res.ok ? res : Promise.reject(res)
    });
}
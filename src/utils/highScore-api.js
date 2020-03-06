const BASE_URL = '/api/highScore/';

export function create(highScore) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(highScore)
    }).then(res => res.json());
}

export function index() {
    return fetch(BASE_URL).then(res => res.json());
}
const BASE_URL = '/api/score/';

export function create(score) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(score)
    }).then(res => res.json());
}

export function index() {
    return fetch(BASE_URL).then(res => res.json());
}
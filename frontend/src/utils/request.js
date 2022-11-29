const SERVER_HOST = 'http://localhost:6969';

export const request = async (method, path, requestData) => {
    const response =  method === 'GET'
        ? await fetch(`${SERVER_HOST}/${path}`)
        : await fetch(`${SERVER_HOST}/${path}`, {
                method: method,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            });

    return response.json();
}

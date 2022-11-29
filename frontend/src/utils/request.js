const SERVER_HOST = 'http://localhost:6969';

export const request = async (requestData, path, method) => {
    const response =  await fetch(`${SERVER_HOST}/${path}`, {
        method: method ? method : 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    });

    return response.json();
}

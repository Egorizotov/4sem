class Ajax {
    async get(url, callback) {
        try {
            const response = await fetch(url);
            const data = response.headers.get('content-type')?.includes('application/json')
                ? await response.json()
                : null;
            callback(data, response.status);
        } catch (e) {
            console.error('Ошибка запроса:', e);
            callback(null, 0);
        }
    }

    async post(url, data, callback) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const responseData = response.headers.get('content-type')?.includes('application/json')
                ? await response.json()
                : null;
            callback(responseData, response.status);
        } catch (e) {
            console.error('Ошибка запроса:', e);
            callback(null, 0);
        }
    }

    async patch(url, data, callback) {
        try {
            const response = await fetch(url, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const responseData = response.headers.get('content-type')?.includes('application/json')
                ? await response.json()
                : null;
            callback(responseData, response.status);
        } catch (e) {
            console.error('Ошибка запроса:', e);
            callback(null, 0);
        }
    }

    async delete(url, callback) {
        try {
            const response = await fetch(url, { method: 'DELETE' });
            const responseData = response.headers.get('content-type')?.includes('application/json')
                ? await response.json()
                : null;
            callback(responseData, response.status);
        } catch (e) {
            console.error('Ошибка запроса:', e);
            callback(null, 0);
        }
    }
}

export const ajax = new Ajax();

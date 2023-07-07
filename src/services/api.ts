import axios from "axios";

axios.interceptors.request.use(
    async (request: any) => {
        return {
            ...request,
            baseURL: 'http://localhost:3001',
            headers: {
                ...request.headers
            },
            data: request.data ? request.data : {}
        };
    }
);

// TODO - Futuramente tratar o status do erro e até a mensagem 
// enviada pelo back-end e exibir um feedback em tela.
async function handleErrorResponse(responseStatus: number) {
    console.error('Erro na requisição: ', responseStatus);
}

async function handleSuccessResponse(response: any) {
    if(response && response.data) {
        if(response.status === 200)
            return response.data;
        else
            return handleErrorResponse(response.status);
    }
}

export async function get(url: string, params?: object) {
    try {
        const response = await axios.get(url, params ? params : {});
        return handleSuccessResponse(response);
    } catch(error: any) {
        return handleErrorResponse(error.status);
    }
}

export async function post(url: string, data: object, params?: object) {
    try {
        const response = await axios.post(url, data, params ? params : {});
        return handleSuccessResponse(response);
    } catch(error: any) {
        return handleErrorResponse(error.status);
    }
}

export async function put(url: string, data: object, params?: object) {
    try{
        const response = await axios.put(url, data, params ? params : {});
        return handleSuccessResponse(response);
    } catch(error: any) {
        return handleErrorResponse(error.status);
    }
}

export async function del(url: string, params?: object) {
    try {
        const response = await axios.delete(url, params ? params : {});
        return handleSuccessResponse(response);
    } catch(error: any) {
        return handleErrorResponse(error.status);
    }
}
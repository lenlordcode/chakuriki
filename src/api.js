import axios from "axios";

const token = '';
const baseUrl = 'http://127.0.0.1:8000/';

export default {
    async request(method, url, payload, requestParams = {}) {
        const params = {
            url,
            method,
            ...requestParams,
        };
        try{
            const request = await axios({
                method: params.method,
                url: baseUrl+params.url,
                data: payload,
            })
                .then(response => response.data)
                .catch(error => error);
            return request;
        }catch (error){
            console.log (error);
        }
    },

     get(url, payload) {
         return this.request('get', url, payload);
    },

    post(url, payload) {
        return this.request('post', url, payload);
    },

    put(url, payload) {
        return this.request('put', url, payload);
    },

    delete(url, payload) {
        return this.request('delete', url, payload);
    },
};


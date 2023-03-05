import { request } from "./config"

const baseApi = {
    async fetchAll (url, data) {
        return await request.get(url, data);
    },
    async postABio (url, data) {
        return await request.post(url, data);
    }
}

export default baseApi;
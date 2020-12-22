import HttpClient from "./httpClient";

export class FetchClient {
    constructor() {
        this.httpClient = new HttpClient();
    }

    get (type, resource, params, headers) {
        const url = this.convertUrlToHTTP(type, resource, params)
        return this.httpClient.get(url, headers).then(res => res.data)
    }

    convertUrlToHTTP(type, resource, params) {
        const queryParams = 'app=web&version=3.0.2&tag=loreal-paris&page=0:20'
        return 'https://staging.healthandglow.com/api/catalog/product/v6/search/999?' + queryParams
    }
}
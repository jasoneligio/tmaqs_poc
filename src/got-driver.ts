import got, { PlainResponse } from 'got';
import { IGotDriver } from '../src/';

export default class GotDriver implements IGotDriver {

    baseUrl: string = '';

    public set BaseUrl(baseUrl: string) {
        this.baseUrl = baseUrl;
    }
    
    public get BaseUrl() {
        return this.baseUrl;
    }

    getWithResponse = async (path: string): Promise<PlainResponse> => {
        return await got.get(
            `${this.baseUrl}${path}`, 
            {
                responseType: 'json', 
                resolveBodyOnly: false
            }
        );
    };

    postWithResponse = async (path: string, body: string): Promise<PlainResponse> => {
        return await got.post(
            `${this.baseUrl}${path}`, 
            {
                json: JSON.parse(body),
                responseType: 'json', 
                resolveBodyOnly: false 
            }
        );
    };

}
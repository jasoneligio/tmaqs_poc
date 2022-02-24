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

    // method for http get request with json response
    getWithJsonResponse = async (path: string): Promise<PlainResponse> => {
        return await got.get(
            `${this.baseUrl}${path}`, 
            {
                responseType: 'json', 
                resolveBodyOnly: false,
                encoding: 'utf8'
            }
        );
    };

    // method for http post request with json response and json body
    postWithJsonResponseAndJsonBody = async (path: string, body: string): Promise<PlainResponse> => {
        return await got.post(
            `${this.baseUrl}${path}`, 
            {
                json: JSON.parse(body),
                responseType: 'json', 
                resolveBodyOnly: false,
                encoding: 'utf8'
            }
        );
    };

    // method for http put request with json response and json body
    putWithJsonResponseAndJsonBody = async (path: string, body: string): Promise<PlainResponse> => {
        return await got.put(
            `${this.baseUrl}${path}`, 
            {
                json: JSON.parse(body),
                responseType: 'json', 
                resolveBodyOnly: false,
                encoding: 'utf8'
            }
        );
    };

    // method for http patch request with json response and json body
    patchWithJsonResponseAndJsonBody = async (path: string, body: string): Promise<PlainResponse> => {
        return await got.patch(
            `${this.baseUrl}${path}`, 
            {
                json: JSON.parse(body),
                responseType: 'json', 
                resolveBodyOnly: false,
                encoding: 'utf8'
            }
        );
    };

    // method for http delete request with json response
    deleteWithJsonResponse = async (path: string): Promise<PlainResponse> => {
        return await got.delete(
            `${this.baseUrl}${path}`, 
            {
                responseType: 'json', 
                resolveBodyOnly: false,
                encoding: 'utf8'
            }
        );
    };

}
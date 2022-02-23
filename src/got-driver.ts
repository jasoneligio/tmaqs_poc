import got, { PlainResponse } from 'got';
import { IGotDriver } from '../src/';

export default class GotDriver implements IGotDriver {

    getWithJsonResponseObject = async (path: string): Promise<PlainResponse> => {
        return await got.get(path, {responseType: 'json', resolveBodyOnly: false});
    };

    getWithJsonResponseBody = async (path: string): Promise<PlainResponse> => {
        return await got.get(path, {responseType: 'json', resolveBodyOnly: true});
    };

}
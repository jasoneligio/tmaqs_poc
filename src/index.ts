import { PlainResponse } from 'got';

export interface IGotDriver {

  BaseUrl: string;
  
  getWithResponse: (path: string) => Promise<PlainResponse>;

  postWithResponse: (path: string, body: string) => Promise<PlainResponse>;

}
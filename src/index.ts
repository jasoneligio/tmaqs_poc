import { PlainResponse } from 'got';

export interface IGotDriver {

  BaseUrl: string;
  
  getWithJsonResponse: (path: string) => Promise<PlainResponse>;

  postWithJsonResponseAndJsonBody: (path: string, body: string) => Promise<PlainResponse>;

  putWithJsonResponseAndJsonBody: (path: string, body: string) => Promise<PlainResponse>;

  deleteWithJsonResponse: (path: string) => Promise<PlainResponse>;

}
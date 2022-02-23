import { PlainResponse } from 'got';

export interface IGotDriver {

  getWithJsonResponseObject: (path: string) => Promise<PlainResponse>;
  
  getWithJsonResponseBody: (path: string) => Promise<PlainResponse>;

}
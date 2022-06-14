import { HttpClientAxiosAdapter } from '../../../infra/https/https-client-axios';

export const makeAxiosHttpClient = (): HttpClientAxiosAdapter => {
  return new HttpClientAxiosAdapter();
};

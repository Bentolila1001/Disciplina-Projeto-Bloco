import { HttpClient } from '../../../data/protocol/http/https';
import { AuthorizeHttpClientDecorator } from '../../decorator/authorize-http-client-decorator';
import { makeLocalStorageAdapter } from '../cache/local-storage-adapter-factory';
import { makeAxiosHttpClient } from '../http/axios-http-factories';

export const makeAuthorizeHttpClientDecorator = (): HttpClient =>
  new AuthorizeHttpClientDecorator(
    makeLocalStorageAdapter(),
    makeAxiosHttpClient()
  );

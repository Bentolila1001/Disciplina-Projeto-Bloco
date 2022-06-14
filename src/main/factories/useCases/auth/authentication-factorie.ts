import { RemoteAuthentication } from '../../../../data/useCases/auth/remote-authentication';
import { Authentication } from '../../../../domain/useCase/authentication';
import { makeAxiosHttpClient } from '../../http/axios-http-factories';
import { makeApiUrl } from '../../http/url-factories';

export const makeRemoteAuthentication = (): Authentication => {
  return new RemoteAuthentication(makeApiUrl('/login'), makeAxiosHttpClient());
};

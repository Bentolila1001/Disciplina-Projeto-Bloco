import { RemoteReadPraias } from '../../../data/useCases/remote-praias';
import { makeAuthorizeHttpClientDecorator } from '../decorator/authorize-http-client-decorator';
import { makeApiUrl } from '../http/url-factories';

export const makeRemoteListAllPraias = (): RemoteReadPraias => {
  return new RemoteReadPraias(
    makeApiUrl('/praias.json'),
    makeAuthorizeHttpClientDecorator()
  );
};

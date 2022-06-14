import { RemoteReadPraias } from '../../../data/useCases/remote-praias';
import { RemoteReadRestaurante } from '../../../data/useCases/remote-restaurante';
import { makeAuthorizeHttpClientDecorator } from '../decorator/authorize-http-client-decorator';
import { makeApiUrl } from '../http/url-factories';

export const makeRemoteListAllResutaurantes = (): RemoteReadRestaurante => {
    return new RemoteReadRestaurante(
        makeApiUrl('/restaurante.json'),
        makeAuthorizeHttpClientDecorator()
    );
};

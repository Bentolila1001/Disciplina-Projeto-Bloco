import { UnexpectedError } from '../../domain/errors/unexpected-error';
import { PraiasModel } from '../../domain/models/praias';
import { RestauranteModel } from '../../domain/models/restaurantes';
import { PraiasRead } from '../../domain/useCase/read-praias';
import { RestauranteRead } from '../../domain/useCase/read-restaurante';
import { HttpClient, HttpStatusCode } from '../protocol/http/https';

export class RemoteReadRestaurante implements RestauranteRead {
  constructor(
    private readonly url: string,
    private readonly httpClientListAll?: HttpClient<RestauranteModel[]> | null,
    private readonly httpClientById?: HttpClient<RestauranteModel>
  ) {}

  async all(): Promise<RestauranteModel[]> {
    const httpResponse = await this.httpClientListAll?.request({
      url: this.url,
      method: 'get',
    });
    switch (httpResponse?.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse?.body!;
      case HttpStatusCode.noContent:
        return [];
      default:
        throw new UnexpectedError();
    }
  }
  async byId(id: string): Promise<RestauranteModel> {
    const httpResponse = await this.httpClientById?.request({
      url: this.url.concat(`/${id}.json`),
      method: 'get',
    });
    switch (httpResponse?.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse?.body!;
      case HttpStatusCode.noContent:
        return {} as RestauranteModel;
      default:
        throw new UnexpectedError();
    }
  }
}

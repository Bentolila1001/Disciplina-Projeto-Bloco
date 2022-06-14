import { UnexpectedError } from '../../domain/errors/unexpected-error';
import { PraiasModel } from '../../domain/models/praias';
import { PraiasRead } from '../../domain/useCase/read-praias';
import { HttpClient, HttpStatusCode } from '../protocol/http/https';

export class RemoteReadPraias implements PraiasRead {
  constructor(
    private readonly url: string,
    private readonly httpClientListAll?: HttpClient<PraiasModel[]> | null,
    private readonly httpClientById?: HttpClient<PraiasModel>
  ) {}

  async all(): Promise<PraiasModel[]> {
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
  async byId(id: string): Promise<PraiasModel> {
    const httpResponse = await this.httpClientById?.request({
      url: this.url.concat(`/${id}.json`),
      method: 'get',
    });
    switch (httpResponse?.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse?.body!;
      case HttpStatusCode.noContent:
        return {} as PraiasModel;
      default:
        throw new UnexpectedError();
    }
  }
}

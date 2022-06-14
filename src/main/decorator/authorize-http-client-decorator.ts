import { GetStorage } from '../../data/protocol/cache/get-storage';
import {
  HttpClient,
  HttpRequest,
  HttpResponse,
} from '../../data/protocol/http/https';

export class AuthorizeHttpClientDecorator implements HttpClient {
  constructor(
    private readonly getStorage: GetStorage,
    private readonly httpClient: HttpClient
  ) {}

  async request(data: HttpRequest): Promise<HttpResponse> {
    const account = this.getStorage.get('account');
    if (account?.accessToken) {
      Object.assign(data, {
        headers: Object.assign(data.headers || {}, {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        }),
      });
    }
    const httpResponse = await this.httpClient.request(data);
    return httpResponse;
  }
}

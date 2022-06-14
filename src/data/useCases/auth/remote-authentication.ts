import { InvalidCredentialsError } from '../../../domain/errors/invalid-credential-error';
import { UnexpectedError } from '../../../domain/errors/unexpected-error';
import { UserModel } from '../../../domain/models/user';
import {
  Authentication,
  AuthenticationParams,
} from '../../../domain/useCase/authentication';
import { HttpClient, HttpStatusCode } from '../../protocol/http/https';

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<UserModel>
  ) {}

  async auth(params: AuthenticationParams): Promise<UserModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body!;
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}

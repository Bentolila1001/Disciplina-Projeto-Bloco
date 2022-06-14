import axios, { AxiosResponse } from 'axios';
import {
  HttpClient,
  HttpRequest,
  HttpResponse,
} from '../../data/protocol/http/https';

export class HttpClientAxiosAdapter implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await axios.request({
        url: encodeURI(data.url),
        method: data.method,
        data: data.body,
        headers: data.headers,
      });
    } catch (error: any) {
      axiosResponse = error.response;
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}

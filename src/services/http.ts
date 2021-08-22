import fetch, { Response } from 'node-fetch';

export interface Config {
  baseUrl: string;
}
export class HttpClient {
  readonly config: Config;

  constructor(config: Config) {
    const baseUrl = new URL(config.baseUrl).origin;
    this.config = {
      ...config,
      baseUrl,
    };
  }

  async handleResponse<T extends { message?: any }>(response: Response): Promise<T> {
    const data = (await response.json()) as T;
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  }

  buildUrl(url: string): string {
    if (url.startsWith('http')) {
      return url;
    }

    const relativeUrl = url.startsWith('/') ? url.slice(1) : url;

    return `${this.config.baseUrl}/${relativeUrl}`;
  }

  async get<T>(url: string): Promise<T> {
    const requestOptions = {
      method: 'GET',
    };
    return fetch(this.buildUrl(url), requestOptions).then(response =>
      this.handleResponse(response),
    );
  }
}

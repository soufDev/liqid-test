import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com';

class ApiService {
  client;

  constructor() {
    const client = axios.create({
      baseURL: URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    this.client = client;
  }

  async get(path, options) {
    const response = await this.client.get(path, options);
    return response.data;
  }

  async add(path, body, options) {
    const response = await this.client.post(path, { data: body }, options);
    return response.data;
  }
}

export default new ApiService();
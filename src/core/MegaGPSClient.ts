import { ActionEnum, RequestParams } from '../types/interfaces';

/**
 * @class MegaGPSClient
 * @description Клас для роботи з API Mega GPS
 * @link http://mega-gps.net/info/api3.html
 */
export class MegaGPSClient {
  private host: string = 'http://mega-gps.com/api3';
  private API_KEY: string = '';
  private method: string = 'POST';

  readonly ACTION_ENUM = ActionEnum;

  constructor(key: string) {
    this.API_KEY = key;
  }

  /**
   * @description - Запит до API Mega GPS
   * @param {object} params - Параметри запиту
   * @returns {Promise<any>} - Відповідь від API
   * @throws {Error} - Якщо статус відповіді не 200
   */
  async request(params: RequestParams): Promise<any> {
    try {
      const url = new URL(this.host);
      const requestParams = { ...params, s: this.API_KEY };

      const response = await fetch(url.toString(), {
        method: this.method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestParams)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error during API request:', error);
      throw error;
    }
  }
}

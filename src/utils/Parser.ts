/**
 * @class Parser
 * @description Клас для обробки відповідей від API Mega GPS
 */
export class Parser {
  /**
   * @description - Обробка відповіді від API
   * @param {any} response - Відповідь від API
   * @returns {any[]} - Масив оброблених даних
   */
  parse(response: any): any[] {
    if (!response || typeof response !== 'object') {
      return [];
    }

    if (Array.isArray(response)) {
      return response;
    }

    if (response.data && Array.isArray(response.data)) {
      return response.data;
    }

    return [response];
  }
}

import { MegaGPSService } from './core/MegaGPSService';
import { MegaGPSConfig } from './types/interfaces';

/**
 * @description - Клас для роботи з API MegaGPS
 * @class MegaGPS
 * @throws {Error} - Якщо API ключ не вказано
 * @example
 * import { MegaGPS } from 'mega-gps';
 * const megaGPS = new MegaGPS({ key: 'your_api_key'});
 * const data = await megaGPS.currentData('tracker_id');
 */
export class MegaGPS {
  #service: MegaGPSService;

  constructor({ key = '' }: MegaGPSConfig) {
    if (!key) {
      throw new Error('API key is required');
    }
    this.#service = new MegaGPSService(key);
  }

  /**
   * @description - Отримати поточне положення трекера та стан датчиків
   * @param {string} trackerId - ID трекера
   * @returns {Promise<object>} - Об'єкт з даними трекера
   * @throws {Error} - Якщо ID трекера не вказано
   */
  async currentData(trackerId: string): Promise<any> {
    if (!trackerId) {
      throw new Error('Tracker ID is required');
    }
    return this.#service.getCurrentData(trackerId);
  }

  /**
   * @description - Отримати список всіх трекерів
   * @returns {Promise<object[]>} - Об'єкт з даними трекерів
   */
  async allTrackers(): Promise<any[]> {
    return this.#service.getAllTrackers();
  }

  /**
   * @description - Отримати пробіг трекера за період
   * @param {string} trackerId - ID трекера
   * @param {string} fromDate - Початкова дата (unixtime)
   * @param {string} toDate - Кінцева дата (unixtime)
   * @returns {Promise<object>} - Об'єкт з даними пробігу
   */
  async mileage(trackerId: string, fromDate: string, toDate: string): Promise<any> {
    if (!trackerId) {
      throw new Error('Tracker ID is required');
    }
    if (!fromDate || !toDate) {
      throw new Error('From date and To date are required');
    }
    return this.#service.getMileage(trackerId, fromDate, toDate);
  }

  /**
   * @description - Отримати трек за період
   * @param {string} trackerId - ID трекера
   * @param {string} fromDate - Початкова дата (unixtime)
   * @param {string} toDate - Кінцева дата (unixtime)
   * @returns {Promise<object[]>} - Масив об'єктів з даними треку
   */
  async track(trackerId: string, fromDate: string, toDate: string): Promise<any[]> {
    if (!trackerId) {
      throw new Error('Tracker ID is required');
    }
    if (!fromDate || !toDate) {
      throw new Error('From date and To date are required');
    }
    return this.#service.getTrack(trackerId, fromDate, toDate);
  }
}

// Для підтримки синтаксису CommonJS
export default MegaGPS;

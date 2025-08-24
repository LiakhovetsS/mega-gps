import { MegaGPSClient } from './MegaGPSClient';
import { Parser } from '../utils/Parser';
import { Car, CurrentData } from '../entity';

/**
 * @class MegaGPSService
 * @description Клас для роботи з API Mega GPS
 * @description Використовується для отримання даних з API Mega GPS
 */
export class MegaGPSService {
  private client: MegaGPSClient;
  private parser = new Parser();

  constructor(key: string) {
    this.client = new MegaGPSClient(key);
  }

  /**
   * @description - Отримати поточне положення трекера та стан датчиків
   * @param {string} trackerId - ID трекера
   * @returns {Promise<object>} - Об'єкт з даними трекера
   * @throws {Error} - Якщо ID трекера не вказано
   */
  async getCurrentData(trackerId: string): Promise<any> {
    const response = await this.client.request({
      c: this.client.ACTION_ENUM.GET_CURRENT_DATA,
      i: trackerId
    });
    const parsedData = this.parser.parse(response)[0];
    return new CurrentData(parsedData).model;
  }

  /**
   * @description - Отримати список всіх трекерів
   * @returns {Promise<object[]>} - Об'єкт з даними трекерів
   */
  async getAllTrackers(): Promise<any[]> {
    const response = await this.client.request({
      c: this.client.ACTION_ENUM.GET_ALL_TRACKER,
      i: 0
    });
    const parsedData = this.parser.parse(response);
    const list: any[] = [];
    for (const item of parsedData) {
      const car = new Car(item);
      list.push(car.model);
    }
    return list;
  }

  /**
   * @description - Отримати пробіг трекера за період
   * @param {string} trackerId - ID трекера
   * @param {string} fromDate - Початкова дата (unixtime)
   * @param {string} toDate - Кінцева дата (unixtime)
   * @returns {Promise<object>} - Об'єкт з даними пробігу
   * @throws {Error} - Якщо ID трекера не вказано
   */
  async getMileage(trackerId: string, fromDate: string, toDate: string): Promise<any> {
    const response = await this.client.request({
      c: this.client.ACTION_ENUM.GET_MILEAGE,
      i: trackerId,
      x: fromDate,
      y: toDate
    });
    const parsedData = this.parser.parse(response)[0];
    return parsedData;
  }

  /**
   * @description - Отримати трек за період
   * @param {string} trackerId - ID трекера
   * @param {string} fromDate - Початкова дата (unixtime)
   * @param {string} toDate - Кінцева дата (unixtime)
   * @returns {Promise<object[]>} - Масив об'єктів з даними треку
   * @throws {Error} - Якщо ID трекера не вказано
   */
  async getTrack(trackerId: string, fromDate: string, toDate: string): Promise<any[]> {
    const response = await this.client.request({
      c: this.client.ACTION_ENUM.GET_TRACK,
      i: trackerId,
      x: fromDate,
      y: toDate
    });
    const parsedData = this.parser.parse(response);
    return parsedData;
  }
}

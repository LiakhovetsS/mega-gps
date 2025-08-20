'use strict';
const MegaGPSService = require('./core/MegaGPSService');

/**
 * @description - Клас для роботи з API MegaGPS
 * @class MegaGPS
 * @param {string} key - API ключ для доступу до MegaGPS
 * @throws {Error} - Якщо API ключ не вказано
 * @example
 * const MegaGPS = require('./MegaGPS');
 * const megaGPS = new MegaGPS({ key: 'your_api_key'});
 * const data = await megaGPS.currentData('tracker_id');
 *
 * */
class MegaGPS {
  #service;

  constructor({ key = '' }) {
    this.#service = new MegaGPSService(key);
  }

  /**
   * @description - Отримати поточне положення трекера та стан датчиків
   * @param {string} trackerId - ID трекера
   * @returns {Promise<object>} - Об'єкт з даними трекера
   * @throws {Error} - Якщо ID трекера не вказано
   * */
  async currentData(trackerId) {
    if (!trackerId) {
      throw new Error('Tracker ID is required');
    }
    return this.#service.getCurrentData(trackerId);
  }

  /**
   * @description - Отримати список всіх трекерів
   * @returns {Promise<object>} - Об'єкт з даними трекерів
   * */
  async allTrackers() {
    return this.#service.getAllTrackers();
  }
}

module.exports = MegaGPS;
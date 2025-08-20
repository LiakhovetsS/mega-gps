'use strict';
const MegaGPSClient = require('./MegaGPSClient');
const Parser = require('../utils/Parser');
const { CurrentData, Car } = require('../entity/index');

/**
 * @class MegaGPSService
 * @description Клас для роботи з API Mega GPS
 * @description Використовується для отримання даних з API Mega GPS
 * @param {string} key - API ключ для доступу до API Mega GPS
 * */
class MegaGPSService {
  #client = MegaGPSClient;
  #parser = new Parser();

  constructor(key) {
    this.#client = new MegaGPSClient(key);
  }

  /**
   * @description - Отримати поточне положення трекера та стан датчиків
   * @param {string} trackerId - ID трекера
   * @returns {Promise<object>} - Об'єкт з даними трекера
   * @throws {Error} - Якщо ID трекера не вказано
   * */
  async getCurrentData(trackerId) {
    const response = await this.#client.request({
      c: this.#client.ACTION_ENUM.GET_CURRENT_DATA,
      i: trackerId
    });
    const parsedData = this.#parser.parse(response)[0];
    return new CurrentData(parsedData).model;
  }

  /**
   * @description - Отримати список всіх трекерів
   * @returns {Promise<object>} - Об'єкт з даними трекерів
   * */
  async getAllTrackers() {
    const response = await this.#client.request({
      c: this.#client.ACTION_ENUM.GET_ALL_TRACKER,
      i: 0
    });
    const parsedData = this.#parser.parse(response);
    const list = [];
    for (const item of parsedData) {
      const car = new Car(item);
      list.push(car.model);
    }
    return list;
  }
}

module.exports = MegaGPSService;
'use strict';

/**
 * @class MegaGPSClient
 * @description Клас для роботи з API Mega GPS
 * @description Використовується для отримання даних з API Mega GPS
 * @link http://mega-gps.net/info/api3.html
 * @param {string} #host - Host для API Mega GPS
 * @param {string} #API_KEY - API ключ для доступу до API Mega GPS
 * @param {string} #method - Метод запиту до API Mega GPS
 * @param {object} #ACTION_ENUM - Перелік доступних дій API Mega GPS
 * @param {number} #ACTION_ENUM.GET_ALL_TRACKER - Отримати всі трекери
 * @param {number} #ACTION_ENUM.GET_CURRENT_DATA - Отримати дані трекера поточне положення та стан датчиків
 * @param {number} #ACTION_ENUM.GET_MILEAGE - Отримати пробіг трекера та моточаси
 * @param {number} #ACTION_ENUM.GET_TRACK - Отримати трек за обраний період
 * @param {number} #ACTION_ENUM.REMOTE_CONTROL - Віддалене управління трекером
 * @param {number} #ACTION_ENUM.GET_DATE_MILEAGE - Посуточний пробіг та сумарний пробіг
 * @param {number} #ACTION_ENUM.GET_PHONE_NUMBER_BALANCE - Отримати баланс телефону та номер
 * @param {number} #ACTION_ENUM.SEND_TEXT_COMMAND - Відправити текстову команду трекеру
 * @method #request
 * */
class MegaGPSClient {
  #host = 'http://mega-gps.com/api3';
  #API_KEY = '';
  #method = 'POST';
  ACTION_ENUM = {
    GET_ALL_TRACKER: 0,
    GET_CURRENT_DATA: 1,
    GET_MILEAGE: 2,
    GET_TRACK: 3,
    REMOTE_CONTROL: 5,
    GET_DATE_MILEAGE: 6,
    GET_PHONE_NUMBER_BALANCE: 7,
    SEND_TEXT_COMMAND: 8,
  }


  constructor(key) {
    this.#API_KEY = key;
  }

  /**
   * @description - Запит до API Mega GPS
   * @param {object} params - Параметри запиту
   * @param {number} params.s - ключ API
   * @param {number} params.c - код функції (0,1,2,3,5)
   * @param {number} params.i - ID трекера, 0 - отримати всі трекери
   * @param {string} params.x - unixtime начала подсчета пробега
   * @param {string} params.y - unixtime конца подсчета пробега
   * @returns {Promise<object>} - Об'єкт з даними трекера
   * @throws {Error} - Якщо статус відповіді не 200
   * */
  async request({ c = 1, i = 0, x = '', y = '' }) {
    if (!this.#API_KEY) {
      throw new Error('API key is required');
    }
    const raw = `s=${this.#API_KEY}&c=${c}&i=${i}&x=${x}&y=${y}`;
    const response = await fetch(this.#host, {
      method: this.#method,
      body: raw,
      signal: AbortSignal.timeout(30000)
    });
    if (response.status !== 200) throw new Error(response);
    return response.text();
  }
}

module.exports = MegaGPSClient;
import {IMegaGPSResponse, IRequestParams} from '../types/interfaces';

/**
 * @class MegaGPSClient
 * @description Клас для роботи з API Mega GPS
 * @description Використовується для отримання даних з API Mega GPS
 * @link http://mega-gps.net/info/api3.html
 * @param {string} host - Host для API Mega GPS
 * @param {string} API_KEY - API ключ для доступу до API Mega GPS
 * @param {string} method - Метод запиту до API Mega GPS
 * @param {object} ACTION_ENUM - Перелік доступних дій API Mega GPS
 * @param {number} ACTION_ENUM.GET_ALL_TRACKER - Отримати всі трекери
 * @param {number} ACTION_ENUM.GET_CURRENT_DATA - Отримати дані трекера поточне положення та стан датчиків
 * @param {number} ACTION_ENUM.GET_MILEAGE - Отримати пробіг трекера та моточаси
 * @param {number} ACTION_ENUM.GET_TRACK - Отримати трек за обраний період
 * @param {number} ACTION_ENUM.REMOTE_CONTROL - Віддалене управління трекером
 * @param {number} ACTION_ENUM.GET_DATE_MILEAGE - Посуточний пробіг та сумарний пробіг
 * @param {number} ACTION_ENUM.GET_PHONE_NUMBER_BALANCE - Отримати баланс телефону та номер
 * @param {number} ACTION_ENUM.SEND_TEXT_COMMAND - Відправити текстову команду трекеру
 * @method request
 * */
export class MegaGPSClient {
    private readonly host: string = 'http://mega-gps.com/api3';
    private readonly API_KEY: string = '';
    private readonly method: string = 'POST';

    constructor(key: string) {
        this.API_KEY = key;
    }

    /**
     * @description - Запит до API Mega GPS
     * @param {object} params - Параметри запиту
     * @returns {Promise<string>} - Відповідь від API
     * @throws {Error} - Якщо статус відповіді не 200
     */
    async request(params: IRequestParams): Promise<string> {
        if (!this.API_KEY) {
            throw new Error('API key is required');
        }
        const raw = `s=${this.API_KEY}&c=${params.c}&i=${params.i}&x=${params.x}&y=${params.y}`;
        const response: IMegaGPSResponse = await fetch(this.host, {
            method: this.method,
            body: raw,
            signal: AbortSignal.timeout(30000)
        });
        if (response.status !== 200) {
            // @ts-ignore
            throw new Error(response);
        }
        return response.text();
    }
}

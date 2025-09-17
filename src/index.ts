import {MegaGPSService} from './core/MegaGPSService';
import {IMegaGPSConfig} from './types/interfaces';
import {TCurrentDataOut} from "./types/CurrentData";
import {TCar} from "./types/Car";
import {TMileage} from "./types/Mileage";
import {TTrackDataOut} from "./types/Track";

/**
 * @description - Клас для роботи з API MegaGPS
 * @class MegaGPS
 * @throws {Error} - Якщо API ключ не вказано
 * @example
 * import MegaGPS from 'mega-gps';
 * const megaGPS = new MegaGPS({ key: 'your_api_key'});
 * const data = await megaGPS.currentData('tracker_id');
 */
class MegaGPS {
    #service: MegaGPSService;

    constructor({key = ''}: IMegaGPSConfig) {
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
    async currentData(trackerId: number): Promise<TCurrentDataOut> {
        if (!trackerId) {
            throw new Error('Tracker ID is required');
        }
        return this.#service.getCurrentData(trackerId);
    }

    /**
     * @description - Отримати список всіх трекерів
     * @returns {Promise<object[]>} - Об'єкт з даними трекерів
     */
    async allTrackers(): Promise<TCar[]> {
        return this.#service.getAllTrackers();
    }

    /**
     * @description - Отримати пробіг трекера за період
     * @param {string} trackerId - ID трекера
     * @param {string} fromDate - Початкова дата (unixtime)
     * @param {string} toDate - Кінцева дата (unixtime)
     * @returns {Promise<object>} - Об'єкт з даними пробігу
     */
    async mileage(trackerId: number, fromDate: number, toDate: number): Promise<TMileage> {
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
    async track(trackerId: number, fromDate: number, toDate: number): Promise<TTrackDataOut[]> {
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
export = MegaGPS;

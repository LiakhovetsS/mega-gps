import {MegaGPSClient} from './MegaGPSClient';
import {Parser} from '../utils/Parser';
import {Car, CurrentData, Mileage, Track} from '../entity';
import {ActionEnum} from "../types/interfaces";
import {TCurrentDataIn, TCurrentDataOut} from "../types/CurrentData";
import {TMileage} from "../types/Mileage";
import {TTrackDataIn, TTrackDataOut} from "../types/Track";
import {TCar} from "../types/Car";

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
     * @returns {Promise<TCurrentDataOut>} - Об'єкт з даними трекера
     * @throws {Error} - Якщо ID трекера не вказано
     */
    async getCurrentData(trackerId: number): Promise<TCurrentDataOut> {
        const response: string = await this.client.request({
            c: ActionEnum.GET_CURRENT_DATA,
            i: trackerId
        });
        const parsedData: TCurrentDataIn = this.parser.parse<TCurrentDataIn>(response)[0];
        return new CurrentData(parsedData).model;
    }

    /**
     * @description - Отримати список всіх трекерів
     * @returns {Promise<object[]>} - Об'єкт з даними трекерів
     */
    async getAllTrackers(): Promise<TCar[]> {
        const response: string = await this.client.request({
            c: ActionEnum.GET_ALL_TRACKER,
            i: 0
        });
        const parsedData = this.parser.parse<TCar>(response);
        return parsedData.map(item => new Car(item as TCar).model);
    }

    /**
     * @description - Отримати пробіг трекера за період
     * @param {string} trackerId - ID трекера
     * @param {string} fromDate - Початкова дата (unixtime)
     * @param {string} toDate - Кінцева дата (unixtime)
     * @returns {Promise<object>} - Об'єкт з даними пробігу
     * @throws {Error} - Якщо ID трекера не вказано
     */
    async getMileage(trackerId: number, fromDate: number, toDate: number): Promise<TMileage> {
        const response = await this.client.request({
            c: ActionEnum.GET_MILEAGE,
            i: trackerId,
            x: fromDate,
            y: toDate
        });
        const parsedData: TMileage = this.parser.parse<TMileage>(response)[0];
        return new Mileage(parsedData).model;
    }

    /**
     * @description - Отримати трек за період
     * @param {string} trackerId - ID трекера
     * @param {string} fromDate - Початкова дата (unixtime)
     * @param {string} toDate - Кінцева дата (unixtime)
     * @returns {Promise<object[]>} - Масив об'єктів з даними треку
     * @throws {Error} - Якщо ID трекера не вказано
     */
    async getTrack(trackerId: number, fromDate: number, toDate: number): Promise<TTrackDataOut[]> {
        const response = await this.client.request({
            c: ActionEnum.GET_TRACK,
            i: trackerId,
            x: fromDate,
            y: toDate
        });

        const parsedData: TTrackDataIn[] = this.parser.parse<TTrackDataIn>(response);
        return parsedData.map(item => new Track(item as TTrackDataIn).model);
    }
}

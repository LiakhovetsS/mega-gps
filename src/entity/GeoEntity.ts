import {IGeoEntity} from '../types/entity';
import {parseData} from "../types/interfaces";

/**
 * @class GeoEntity
 * @description Класс для работы с геоданными
 * @description Используется для получения данных с API Mega GPS
 * @param {number} id - ID трекера
 * @param {number} lat - Широта ( град.*1000000)
 * @param {number} lng - Долгота ( град.*1000000)
 * @param {number} hDop - GPS H.DOP, меньше - лучше (ед.*10)
 * @param {number} vcc - Напряжение бортовой сети (Вольт*100)
 * @param {number} vBat - Внутреннее напряжение (Вольт*100)
 * @param {number} in1 - Состояние дискретного входа (0 или 1)
 * @param {number} lat6 - Широта (град.*600000)
 * @param {number} lng6 - Долгота (град.*600000)
 * @param {number} lbs_lat - Широта по LBS, если нет GPS (град.*1000000)
 * @param {number} lbs_lng - Долгота по LBS, если нет GPS (град.*1000000)
 * */
export class GeoEntity implements IGeoEntity {
    public id: number = 0;
    protected _lat: number = 0.0;
    protected _lng: number = 0.0;
    protected _hDop: number = 0;
    protected _vcc: number = 0;
    protected _vBat: number = 0;
    protected _in1: number = 0;
    protected _lat6: number = 0;
    protected _lng6: number = 0;
    protected _lbs_lat: number = 0;
    protected _lbs_lng: number = 0;
    private readonly VOLTAGE_ROUND_VALUE = 100;
    private readonly GEO_ROUND_VALUE = 1000000;
    private readonly GEO_TRACK_ROUND_VALUE = 600000;



    set lat(value: number) {
        this._lat = value;
    }

    get lat(): number {
        return this.roundedGeo(this._lat);
    }

    set lng(value: number) {
        this._lng = value;
    }

    get lng(): number {
        return this.roundedGeo(this._lng);
    }

    set lbs_lat(value) {
        this._lbs_lat = value;
    }

    get lbs_lat() {
        return this.roundedGeo(this._lbs_lat);
    }

    set lbs_lng(value) {
        this._lbs_lng = value;
    }

    get lbs_lng() {
        return this.roundedGeo(this._lbs_lng);
    }

    set lat6(value) {
        this._lat6 = value;
    }

    get lat6() {
        return this.roundedGeoTrack(this._lat6);
    }

    set lng6(value) {
        this._lng6 = value;
    }

    get lng6() {
        return this.roundedGeoTrack(this._lng6);
    }

    set vcc(value) {
        this._vcc = value;
    }

    get vcc() {
        return this.roundedVoltage(this._vcc);
    }

    set vBat(value) {
        this._vBat = value;
    }

    get vBat() {
        return this.roundedVoltage(this._vBat);
    }

    get model(): parseData {
        return {
            id: this.id
        }
    }

    private roundedGeo(value: number): number {
        return this.rounded(value, this.GEO_ROUND_VALUE);
    }

    private roundedGeoTrack(value: number): number {
        return this.rounded(value, this.GEO_TRACK_ROUND_VALUE);
    }

    private rounded(value: number, roundValue = 1000000, fixed = 6): number {
        return Number((value / roundValue).toFixed(fixed));
    }

    private roundedVoltage(value: number): number {
        return this.rounded(value, this.VOLTAGE_ROUND_VALUE, 2);
    }

}

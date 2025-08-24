import { GeoEntityData } from '../types/interfaces';

/**
 * @class GeoEntity
 * @description Клас для роботи з геоданими
 * @description Використовується для отримання даних з API Mega GPS
 */
export class GeoEntity {
  id: number | null = null;
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

  constructor(data?: GeoEntityData) {
    if (data) {
      this.id = data.id !== undefined ? data.id : null;
      this._lat = data.lat || 0.0;
      this._lng = data.lng || 0.0;
      this._hDop = data.hDop || 0;
      this._vcc = data.vcc || 0;
      this._vBat = data.vBat || 0;
      this._in1 = data.in1 || 0;
      this._lat6 = data.lat6 || 0;
      this._lng6 = data.lng6 || 0;
      this._lbs_lat = data.lbs_lat || 0;
      this._lbs_lng = data.lbs_lng || 0;
    }
  }

  get lat(): number {
    return this._lat / 1000000;
  }

  get lng(): number {
    return this._lng / 1000000;
  }

  get hDop(): number {
    return this._hDop / 10;
  }

  get vcc(): number {
    return this._vcc / 100;
  }

  get vBat(): number {
    return this._vBat / 100;
  }

  get in1(): number {
    return this._in1;
  }
}

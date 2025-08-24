import { GeoEntity } from './GeoEntity';
import { CurrentDataModel } from '../types/interfaces';

/**
 * @class CurrentData
 * @description Клас для роботи з поточними даними трекера
 */
export class CurrentData extends GeoEntity {
  private _speed: number = 0;
  private _course: number = 0;
  private _datetime: Date = new Date();
  private _satellites: number = 0;

  constructor(data: any) {
    super(data);
    this._speed = data.speed || 0;
    this._course = data.course || 0;
    this._datetime = new Date(data.datetime * 1000 || Date.now());
    this._satellites = data.satellites || 0;
  }

  get speed(): number {
    return this._speed;
  }

  get course(): number {
    return this._course;
  }

  get datetime(): Date {
    return this._datetime;
  }

  get satellites(): number {
    return this._satellites;
  }

  get model(): CurrentDataModel {
    return {
      id: this.id || 0,
      lat: this.lat,
      lng: this.lng,
      speed: this.speed,
      course: this.course,
      datetime: this.datetime,
      satellites: this.satellites,
      hDop: this.hDop,
      vcc: this.vcc,
      vBat: this.vBat,
      in1: this.in1
    };
  }
}

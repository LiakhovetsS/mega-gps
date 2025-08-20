const GeoEntity = require('./GeoEntity');

/**
 * @class CurrentData
 * @description Клас для роботи з поточними даними трекера
 * @param {number} id - ID трекера
 * @param {string} extra - Додаткові дані
 * @param {number} tLast - Час останнього отримання даних
 * @param {number} tValid - Час останніх валідних координат
 * @param {number} tArc - Час останніх даних в непрерывному архиве
 * @param {number} lat - Широта
 * @param {number} lng - Долгота
 * @param {number} lbs_lat - широта по LBS, если нет GPS
 * @param {number} lbs_lng - Долгота по LBS, если нет GPS
 * @param {number} azimuth - Азимут
 * @param {number} speed - Швидкість
 * @param {number} alt - Висота
 * @param {number} sat - Кількість супутників
 * @param {number} hDop - HDOP
 * @param {number} csq - Сигнал
 * @param {number} vcc - Напруга
 * @param {number} vBat - Напруга батареї
 * @param {number} in1 - Вхідний сигнал
 * @param {number} temp1 - Температура 1
 * @param {number} temp2 - Температура 2
 * @param {number} fuel1 - Пальне 1
 * @param {number} fuel2 - Пальне 2
 * @param {number} fuel3 - Пальне 3
 * @param {number} fuel_temp - Температура пального
 * @param {number} geo_in - Геозона
 * @param {string} status - Статус трекера
 *
 * @property {object} STATUS_ENUM - Перелік статусів трекера
 * @property {string} STATUS_ENUM.NoConnection - немає зв'язку із трекером
 * @property {string} STATUS_ENUM.GPSNotSignal - GPS не отримує сигнал
 * @property {string} STATUS_ENUM.success - Успішне отримання даних
 * @property {string} STATUS_ENUM.GPSSuppression - GPS пригнічення
 * @property {string} STATUS_ENUM.GPSReceiverFailure - Збій приймача GPS
 * @property {string} STATUS_ENUM.unknown - Невідомий статус
 *
 * */
class CurrentData extends GeoEntity {
  static STATUS_ENUM = {
    NoConnection: 'NoConnection',
    GPSNotSignal: 'GPSNotSignal',
    success: 'success',
    GPSSuppression: 'GPSSuppression',
    GPSReceiverFailure: 'GPSReceiverFailure',
    unknown: 'unknown'
  }

  constructor(data) {
    super();
    this.id = Number(data.id) || 0;
    this.extra = data.extra || '';
    this.tLast = Number(data.tlast) || 0;
    this.tValid = Number(data.tvalid) || 0;
    this.tArc = Number(data.tarc) || 0;
    this._lat = Number(data.lat) || 0;
    this._lng = Number(data.lng) || 0;
    this._lbs_lat = Number(data.lbs_lat) || 0;
    this._lbs_lng = Number(data.lbs_lng) || 0;
    this.azimuth = Number(data.azi) || 0;
    this.speed = Number(data.speed) || 0;
    this.alt = Number(data.alt) || 0;
    this.sat = Number(data.sat) || 0;
    this.hDop = Number(data.hdop) || 0;
    this.csq = Number(data.csq) || 0;
    this._vcc = Number(data.vcc) || 0;
    this._vBat = Number(data.vbat) || 0;
    this.in1 = Number(data.in1) || 0;
    this.temp1 = Number(data.temp1) || 0;
    this.temp2 = Number(data.temp2) || 0;
    this.fuel1 = Number(data.fuel1) || 0;
    this.fuel2 = Number(data.fuel2) || 0;
    this.fuel3 = Number(data.fuel3) || 0;
    this.fuel_temp = Number(data.fuel_temp) || 0;
    this.geo_in = Number(data.geo_in) || 0;
  }

  get model() {
    return {
      id: this.id,
      extra: this.extra,
      tLast: this.tLast,
      tValid: this.tValid,
      tArc: this.tArc,
      lat: this.lat,
      lng: this.lng,
      lbs_lat: this.lbs_lat,
      lbs_lng: this.lbs_lng,
      azimuth: this.azimuth,
      speed: this.speed,
      alt: this.alt,
      sat: this.sat,
      hDop: this.hDop,
      csq: this.csq,
      vcc: this.vcc,
      vBat: this.vBat,
      in1: this.in1,
      temp1: this.temp1,
      temp2: this.temp2,
      fuel1: this.fuel1,
      fuel2: this.fuel2,
      fuel3: this.fuel3,
      fuel_temp: this.fuel_temp,
      geo_in: this.geo_in,
      status: this.status,
      ...this.coordinates
    }
  }

  get coordinates() {
    if ([CurrentData.STATUS_ENUM.success].includes(this.status) === false) {
      return {
        lat: this.lbs_lat,
        lng: this.lbs_lng
      };
    }
    return {
      lat: this.lat,
      lng: this.lng
    };
  }

  get status() {
    if (this.#isCoordinatesValid === false) return CurrentData.STATUS_ENUM.NoConnection;
    if (this.hDop === 0) return CurrentData.STATUS_ENUM.GPSNotSignal;
    if (this.hDop >= 1) return CurrentData.STATUS_ENUM.success;
    if (this.hDop < 0) {
      const dop = Math.abs(this.hDop);
      if (dop & 1)
        return CurrentData.STATUS_ENUM.GPSSuppression;
      if (dop & 8)
        return CurrentData.STATUS_ENUM.GPSReceiverFailure;
    }
    return CurrentData.STATUS_ENUM.unknown;
  }

  get #isCoordinatesValid() {
    const MINUTES = 2;
    const currentTime = Math.floor(Date.now() / 1000); // Current time in unixtime
    const fifteenMinutes = MINUTES * 60; // 15 minutes in seconds
    return (currentTime - this.tLast) <= fifteenMinutes;
  }

}

module.exports = CurrentData;
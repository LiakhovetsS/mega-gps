const GeoEntity = require('./GeoEntity');

/**
 * @class Track
 * @description Клас для роботи з даними трека
 * @param {object} data - Об'єкт з даними трека
 * @param {number} time - Час отримання даних
 * @param {number} valid - Валідність даних (0 або 1)
 * @param {number} lat6 - Широта (град.*600000)
 * @param {number} lng6 - Долгота (град.*600000)
 * @param {number} azimut - Азимут
 * @param {number} speed - Швидкість
 * @param {number} alt - Висота
 * @param {number} sat - Кількість супутників
 * @param {number} hDop - GPS H.DOP, менше - краще (ед.*10)
 * @param {number} csq - Рівень сигналу GSM, більше - краще
 * @param {number} vcc - Напруга бортової мережі (Вольт*100)
 * @param {number} vBat - Внутрішнє напруга (Вольт*100)
 * @param {number} in1 - Стан дискретного входу (0 або 1)
 * @param {number} temp1 - Температура всередині трекера
 * @param {number} temp2 - Температура зовнішнього датчика, якщо є
 * @param {number} fuel1 - Пальне в баках, якщо є датчики
 * @param {number} fuel2 - Пальне в баках, якщо є датчики
 * @param {number} fuel3 - Пальне в баках, якщо є датчики
 * @param {number} fuel_temp - Температура пального, якщо є
 * @param {number} cnt - ?
 *
 * */
class Track extends GeoEntity {
  time = 0;
  valid = 0;
  _lat6 = 0;
  _lng6 = 0;
  azimut = 0;
  speed = 0;
  alt = 0;
  sat = 0;
  hDop = 0;
  csq = 0;
  _vcc = 0.0;
  _vBat = 0.0;
  in1 = 0;
  temp1 = 0.0;
  temp2 = 0.0;
  fuel1 = 0.0;
  fuel2 = 0.0;
  fuel3 = 0.0;
  fuel_temp = 0.0;
  cnt = 0;

  constructor(data) {
    super();
    this.time = Number(data.t);
    this.valid = Number(data.valid);
    this._lat6 = Number(data.lat6);
    this._lng6 = Number(data.lng6);
    this.azimut = Number(data.azi);
    this.speed = Number(data.speed);
    this.alt = Number(data.alt);
    this.sat = Number(data.sat);
    this.hDop = Number(data.hdop);
    this.csq = Number(data.csq);
    this.vcc = Number(data.vcc);
    this.vBat = Number(data.vbat);
    this.in1 = Number(data.in1);
    this.temp1 = Number(data.temp1);
    this.temp2 = Number(data.temp2);
    this.fuel1 = Number(data.fuel1);
    this.fuel2 = Number(data.fuel2);
    this.fuel3 = Number(data.fuel3);
    this.fuel_temp = Number(data.fuel_temp);
    this.cnt = Number(data.cnt);
  }

  get model() {
    return {
      time: this.time,
      valid: this.valid,
      lat6: this.lat6,
      lng6: this.lng6,
      azimut: this.azimut,
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
      cnt: this.cnt
    }
  }

}

module.exports = Track;
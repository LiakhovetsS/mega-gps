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
class GeoEntity {
  id = null;
  _lat = 0.0;
  _lng = 0.0;
  _hDop = 0;
  _vcc = 0;
  _vBat = 0;
  _in1 = 0;
  _lat6 = 0;
  _lng6 = 0;
  _lbs_lat = 0;
  _lbs_lng = 0;
  #VOLTAGE_ROUND_VALUE = 100; // Вольт * 100
  #GEO_ROUND_VALUE = 1000000;
  #GEO_TRACK_ROUND_VALUE = 600000;

  set lat(value) {
    this._lat = value;
  }

  get lat() {
    return this.#roundedGeo(this._lat);
  }

  set lng(value) {
    this._lng = value;
  }

  get lng() {
    return this.#roundedGeo(this._lng);
  }

  set lbs_lat(value) {
    this._lbs_lat = value;
  }

  get lbs_lat() {
    return this.#roundedGeo(this._lbs_lat);
  }

  set lbs_lng(value) {
    this._lbs_lng = value;
  }

  get lbs_lng() {
    return this.#roundedGeo(this._lbs_lng);
  }

  set lat6(value) {
    this._lat6 = value;
  }

  get lat6() {
    return this.#roundedGeoTrack(this._lat6);
  }

  set lng6(value) {
    this._lng6 = value;
  }

  get lng6() {
    return this.#roundedGeoTrack(this._lng6);
  }

  set vcc(value) {
    this._vcc = value;
  }

  get vcc() {
    return this.#roundedVoltage(this._vcc);
  }

  set vBat(value) {
    this._vBat = value;
  }

  get vBat() {
    return this.#roundedVoltage(this._vBat);
  }

  get model() {
    return {
      id: this.id
    }
  }

  #roundedGeo(value) {
    return this.#rounded(value, this.#GEO_ROUND_VALUE);
  }

  #roundedGeoTrack(value) {
    return this.#rounded(value, this.#GEO_TRACK_ROUND_VALUE);
  }

  #rounded(value, roundValue = 1000000, fixed = 6) {
    return Number((value / roundValue).toFixed(fixed));
  }

  #roundedVoltage(value) {
    return this.#rounded(value, this.#VOLTAGE_ROUND_VALUE, 2);
  }
}

module.exports = GeoEntity;
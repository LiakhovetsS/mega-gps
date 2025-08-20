const GeoEntity = require('./GeoEntity');

/**
 * @class Mileage
 * @description Клас для роботи з даними пробігу
 * @param {object} data - Об'єкт з даними пробігу
 * @param {number} id - ID автомобіля
 * @param {number} km10 - Пробег за выбранный интервал ( км*10)
 * @param {number} maxSpeed - Максимальная скорость за выбранный интервал
 * @param {number} engineTime - Работа двигателя за выбранный интервал
 * @param {number} fuel_begin - Начальный уровень топлива
 * @param {number} fuel_end - Конечный уровень топлива
 *
 * */
class Mileage extends GeoEntity {
  km10 = 0;
  maxSpeed = 0;
  engineTime = 0;
  fuel_begin = 0;
  fuel_end = 0;

  constructor(data) {
    super();
    this.id = Number(data.id);
    this.km10 = Number(data.km10);
    this.maxSpeed = Number(data.maxspeed);
    this.engineTime = Number(data.enginetime);
    this.fuel_begin = Number(data.fuel_begin);
    this.fuel_end = Number(data.fuel_end);
  }

  get model() {
    return {
      id: this.id,
      km10: this.km10,
      maxSpeed: this.maxSpeed,
      engineTime: this.engineTime,
      fuel_begin: this.fuel_begin,
      fuel_end: this.fuel_end
    }
  }
}

module.exports = Mileage;
const GeoEntity = require('./GeoEntity');

/**
 * @class Car
 * @description Клас для роботи з даними автомобіля
 * @param {object} data - Об'єкт з даними автомобіля
 * @param {number} id - ID автомобіля
 * @param {string} name - Назва автомобіля
 * */
class Car extends GeoEntity {
  name = '';

  constructor(data) {
    super();
    this.name = data.name
    this.id = Number(data.id);
  }

  get model() {
    return {
      id: this.id,
      name: this.name
    }
  }
}

module.exports = Car;
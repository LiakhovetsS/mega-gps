import { GeoEntity } from './GeoEntity';
import { CarData } from '../types/interfaces';

/**
 * @class Car
 * @description Клас для роботи з даними автомобіля
 */
export class Car extends GeoEntity {
  name: string = '';

  constructor(data: CarData) {
    super();
    this.name = data.name;
    this.id = Number(data.id);
  }

  get model(): CarData {
    return {
      id: this.id || 0,
      name: this.name
    };
  }
}

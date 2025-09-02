import { GeoEntity } from './GeoEntity';
import { ICarData } from '../types/interfaces';

/**
 * @class Car
 * @description Клас для роботи з даними автомобіля
 */
export class Car extends GeoEntity {
  name: string = '';

  constructor(data: ICarData) {
    super();
    this.name = data.name;
    this.id = Number(data.id);
  }

  get model(): ICarData {
    return {
      id: this.id || 0,
      name: this.name
    };
  }
}

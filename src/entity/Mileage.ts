import { GeoEntity } from './GeoEntity';
import { MileageData } from '../types/interfaces';

/**
 * @class Mileage
 * @description Клас для роботи з даними пробігу
 */
export class Mileage extends GeoEntity {
  private readonly km10: number = 0;
  private readonly maxSpeed: number = 0;
  private readonly engineTime: number = 0;
  private readonly fuel_begin: number = 0;
  private readonly fuel_end: number = 0;

  constructor(data: any) {
    super(data);
    this.id = Number(data.id) || 0;
    this.km10 = Number(data.km10) || 0;
    this.maxSpeed = Number(data.maxSpeed) || 0;
    this.engineTime = Number(data.engineTime) || 0;
    this.fuel_begin = Number(data.fuel_begin) || 0;
    this.fuel_end = Number(data.fuel_end) || 0;
  }


  get model(): MileageData {
    return {
      id: this.id,
      km10: this.km10,
      maxSpeed: this.maxSpeed,
      engineTime: this.engineTime,
      fuel_begin: this.fuel_begin,
      fuel_end: this.fuel_end
    };
  }
}

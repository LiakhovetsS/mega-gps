import { GeoEntity } from './GeoEntity';
import { MileageData } from '../types/interfaces';

/**
 * @class Mileage
 * @description Клас для роботи з даними пробігу
 */
export class Mileage extends GeoEntity {
  private km10: number = 0;
  private maxSpeed: number = 0;
  private engineTime: number = 0;
  private fuel_begin: number = 0;
  private fuel_end: number = 0;

  constructor(data: any) {
    super(data);
    this.id = Number(data.id) || 0;
    // this._engineHours = data.engineHours || 0;
  }

  get mileage(): number {
    // return this._mileage;
  }

  get engineHours(): number {
    // return this._engineHours;
  }

  get model(): MileageData {
    return {
      id: this.id || 0,
      mileage: this.mileage,
      engineHours: this.engineHours
    };
  }
}

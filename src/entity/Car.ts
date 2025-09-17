import {GeoEntity} from './GeoEntity';
import {TCar,ICarData} from '../types/Car';

/**
 * @class Car
 * @description Клас для роботи з даними автомобіля
 */
export class Car extends GeoEntity implements ICarData {
    public readonly name: string = '';

    constructor(data: TCar) {
        super();
        this.name = data.name;
        this.id = Number(data.id);
    }

    get model(): TCar {
        return {
            id: this.id || 0,
            name: this.name
        };
    }
}

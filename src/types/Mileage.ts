import {IGeoEntity} from "./entity";

/**
 * Інтерфейс для даних пробігу
 */
export interface IMileage  extends IGeoEntity {
    model: TMileage;
}

export type TMileage = {
    id: number;
    km10: number;
    maxSpeed: number;
    engineTime: number;
    fuel_begin: number;
    fuel_end: number;
}

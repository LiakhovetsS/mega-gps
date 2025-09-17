/**
 * Інтерфейс для даних автомобіля
 */
export interface ICarData {
    id: number | string;
    name: string;
    model: TCar;
}

export type TCar = {
    id: number;
    name: string;
}


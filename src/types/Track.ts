import {IGeoEntity} from "./entity";

/**
 * Інтерфейс для даних треку
 */
export interface ITrackData extends IGeoEntity {
    time: number;
    valid: number;
    azimut: number;
    speed: number;
    alt: number;
    sat: number;
    hDop: number;
    csq: number;
    vcc: number;
    vBat: number;
    in1: number;
    temp1: number;
    temp2: number;
    fuel1: number;
    fuel2: number;
    fuel3: number;
    fuel_temp: number;
    cnt: number;
    model: TTrackDataOut
}

export type TTrackDataIn = {
    t: number;
    valid: number;
    lat6: number;
    lng6: number;
    azi: number;
    speed: number;
    alt: number;
    sat: number;
    hdop: number;
    csq: number;
    vcc: number;
    vbat: number;
    in1: number;
    temp1: number;
    temp2: number;
    fuel1: number;
    fuel2: number;
    fuel3: number;
    fuel_temp: number;
    cnt: number;
}

export type TTrackDataOut = {
    time: number;
    valid: number;
    lat6: number;
    lng6: number;
    azimut: number;
    speed: number;
    alt: number;
    sat: number;
    hDop: number;
    csq: number;
    vcc: number;
    vBat: number;
    in1: number;
    temp1: number;
    temp2: number;
    fuel1: number;
    fuel2: number;
    fuel3: number;
    fuel_temp: number;
    cnt: number;
}
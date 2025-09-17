import {IGeoEntity} from "./entity";

/**
 * Інтерфейс для поточних даних
 */
export interface ICurrentData extends IGeoEntity {
    id: number;
    extra: string;
    tLast: number;
    tValid: number;
    tArc: number;
    lat: number;
    lng: number;
    speed: number;
    azimuth: number;
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
    geo_in: number;
    model: TCurrentDataOut;
    coordinates: { lat: number, lng: number };
    status: string;
}

export type TCurrentDataIn = {
    id: number;
    extra: string;
    tlast: number;
    tvalid: number;
    tarc: number;
    lat: number;
    lng: number;
    speed: number;
    azi: number;
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
    geo_in: number;
    lbs_lat?: number;
    lbs_lng?: number;
}
export type TCurrentDataOut = {
    id: number;
    extra: string;
    tLast: number;
    tValid: number;
    tArc: number;
    lat: number;
    lng: number;
    speed: number;
    azimuth: number;
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
    geo_in: number;
    status: string;
    lbs_lat: number;
    lbs_lng: number;
};
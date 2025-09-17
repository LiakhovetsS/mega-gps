import {parseData} from "./interfaces";

/**
 * Інтерфейс для геоданих
 */
export interface IGeoEntity {
    id?: number | undefined;
    lat?: number;
    lng?: number;
    hDop?: number;
    vcc?: number;
    vBat?: number;
    in1?: number;
    lat6?: number;
    lng6?: number;
    lbs_lat?: number;
    lbs_lng?: number;
    model: parseData
}



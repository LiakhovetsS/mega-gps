/**
 * Інтерфейси для MegaGPS
 */


/**
 * Інтерфейс для конфігурації MegaGPS
 */
export interface IMegaGPSConfig {
    key: string;
}

/**
 * Інтерфейс для параметрів запиту до API
 */
export interface IRequestParams {
    c: number;
    i: number;
    x?: number;
    y?: number;
}

/**
 * Перелік доступних дій API Mega GPS
 */
export enum ActionEnum {
    GET_ALL_TRACKER = 0,
    GET_CURRENT_DATA = 1,
    GET_MILEAGE = 2,
    GET_TRACK = 3,
    REMOTE_CONTROL = 5,
    GET_DATE_MILEAGE = 6,
    GET_PHONE_NUMBER_BALANCE = 7,
    SEND_TEXT_COMMAND = 8,
}

export enum statusEnum {
    NoConnection = 'NoConnection',
    GPSNotSignal = 'GPSNotSignal',
    success = 'success',
    GPSSuppression = 'GPSSuppression',
    GPSReceiverFailure = 'GPSReceiverFailure',
    unknown = 'unknown'
}


export interface IMegaGPSResponse {
    status: number;

    text(): Promise<string>;
}


export interface IClient {
    request(params: IRequestParams): Promise<string> | Error;
}


export type parseData = {
    [key: string | number]: string | number | null | Date;
}

// Масив об'єктів після парсингу
export type ParseList<T extends parseData> = T[];

// Інтерфейс для парсера CSV
export interface IParserCSV {
    parse<T extends parseData>(rawData: string): ParseList<T>;
}
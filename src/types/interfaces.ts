/**
 * Інтерфейси для MegaGPS
 */

/**
 * Інтерфейс для конфігурації MegaGPS
 */
export interface MegaGPSConfig {
  key: string;
}

/**
 * Інтерфейс для параметрів запиту до API
 */
export interface RequestParams {
  c: number;
  i: number | string;
  x?: string;
  y?: string;
  s?: string;
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

/**
 * Інтерфейс для геоданих
 */
export interface GeoEntityData {
  id?: number | null;
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
}

/**
 * Інтерфейс для даних автомобіля
 */
export interface CarData {
  id: number | string;
  name: string;
}

/**
 * Інтерфейс для поточних даних
 */
export interface CurrentDataModel extends GeoEntityData {
  id: number;
  lat: number;
  lng: number;
  speed: number;
  course: number;
  datetime: Date;
  satellites: number;
  hDop: number;
  vcc: number;
  vBat: number;
  in1: number;
}

/**
 * Інтерфейс для даних треку
 */
export interface TrackData extends GeoEntityData{
  id: number;
  lat: number;
  lng: number;
  speed: number;
  course: number;
  datetime: Date;
  satellites: number;
  hDop: number;
}

/**
 * Інтерфейс для даних пробігу
 */
export interface MileageData{
  id: number;
  km10: number;
  maxSpeed: number;
  engineTime: number;
  fuel_begin: number;
  fuel_end: number;
}

# MegaGPS

## Опис

MegaGPS — це TypeScript/JavaScript бібліотека для інтеграції з GPS-трекерами, що працюють через сервіс [MegaGPS](http://mega-gps.net). Вона дозволяє отримувати дані про трекери, їхнє поточне положення, пробіг та треки за період. Бібліотека спрощує роботу з API MegaGPS, забезпечуючи зручний доступ до інформації про транспортні засоби, їхній рух та стан датчиків у реальному часі.

---

## Встановлення

```bash
npm install mega-gps
```

---

## Використання

```typescript
import MegaGPS from 'mega-gps';

const megaGPS = new MegaGPS({ key: 'your_api_key' });

// Отримати поточні дані трекера
const current = await megaGPS.currentData(trackerId);

// Отримати список всіх трекерів
const trackers = await megaGPS.allTrackers();

// Отримати пробіг за період
const mileage = await megaGPS.mileage(trackerId, fromDate, toDate);

// Отримати трек за період
const track = await megaGPS.track(trackerId, fromDate, toDate);
```

---

## API

### Конструктор

```typescript
new MegaGPS({ key: string })
```
- `key` — API ключ (обов'язково).

### Методи

- `currentData(trackerId: number): Promise<TCurrentDataOut>`
    - Повертає поточне положення та стан датчиків трекера.
- `allTrackers(): Promise<TCar[]>`
    - Повертає список всіх трекерів.
- `mileage(trackerId: number, fromDate: number, toDate: number): Promise<TMileage>`
    - Повертає пробіг трекера за період.
- `track(trackerId: number, fromDate: number, toDate: number): Promise<TTrackDataOut[]>`
    - Повертає трек трекера за період.

---

## Типи

Типи даних описані у папці `src/types/`.

---

## Вимоги

- Node.js >= 14
- TypeScript (для типізації)

---

## Ліцензія

MIT

---

# MegaGPS (English)

## Description

MegaGPS is a TypeScript/JavaScript library for integrating with GPS trackers managed via the [MegaGPS](http://mega-gps.net) service. It allows you to retrieve tracker data, current positions, mileage, and tracks for a given period. The library simplifies interaction with the MegaGPS API, providing convenient access to vehicle information, movement history, and real-time sensor states.

---

## Installation

```bash
npm install mega-gps
```

---

## Usage

```typescript
import MegaGPS from 'mega-gps';

const megaGPS = new MegaGPS({ key: 'your_api_key' });

// Get current tracker data
const current = await megaGPS.currentData(trackerId);

// Get all trackers
const trackers = await megaGPS.allTrackers();

// Get mileage for a period
const mileage = await megaGPS.mileage(trackerId, fromDate, toDate);

// Get track for a period
const track = await megaGPS.track(trackerId, fromDate, toDate);
```

---

## API

### Constructor

```typescript
new MegaGPS({ key: string })
```
- `key` — API key (required).

### Methods

- `currentData(trackerId: number): Promise<TCurrentDataOut>`
    - Returns current position and sensor state for a tracker.
- `allTrackers(): Promise<TCar[]>`
    - Returns a list of all trackers.
- `mileage(trackerId: number, fromDate: number, toDate: number): Promise<TMileage>`
    - Returns mileage for a tracker within a period.
- `track(trackerId: number, fromDate: number, toDate: number): Promise<TTrackDataOut[]>`
    - Returns track data for a tracker within a period.

---

## Types

Data types are described in the `src/types/` folder.

---

## Requirements

- Node.js >= 14
- TypeScript (for typings)

---

## License

MIT

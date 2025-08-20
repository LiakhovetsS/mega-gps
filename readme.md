# MegaGPS

## English

MegaGPS is a Node.js library for interacting with the MegaGPS API. It allows you to retrieve current tracker data, sensor states, and a list of all trackers.

### Features
- Get current tracker position and sensor status
- Retrieve all trackers
- Simple API key authentication

### Installation
```bash
npm install mega-gps
```

### Usage
```js
const MegaGPS = require('./index');
const megaGPS = new MegaGPS({ key: 'your_api_key' });

// Get current data for a tracker
const data = await megaGPS.currentData('tracker_id');
console.log(data);

// Get all trackers
const trackers = await megaGPS.allTrackers();
console.log(trackers);
```

### License
MIT

---

## Українською

MegaGPS — це бібліотека Node.js для роботи з API MegaGPS. Дозволяє отримувати поточні дані трекера, стан датчиків та список всіх трекерів.

### Можливості
- Отримання поточного положення трекера та стану датчиків
- Отримання списку всіх трекерів
- Простий механізм автентифікації через API ключ

### Встановлення
```bash
npm install mega-gps
```

### Використання
```js
const MegaGPS = require('./index');
const megaGPS = new MegaGPS({ key: 'your_api_key' });

// Отримати поточні дані трекера
const data = await megaGPS.currentData('tracker_id');
console.log(data);

// Отримати всі трекери
const trackers = await megaGPS.allTrackers();
console.log(trackers);
```

### Ліцензія
MIT


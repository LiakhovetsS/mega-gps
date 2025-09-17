const test = require('node:test');
const assert = require('node:assert');

const  MegaGPS = require('../../dist/index');

test('Mega GPS - all trackers', async (t) => {
  const mega = new MegaGPS({key:''});
  const trackers = await mega.allTrackers();
  console.log('trackers', trackers);
});

test('Mega GPS - current data', async (t) => {
  const mega = new MegaGPS({key:''});
  const trackers = await mega.currentData();
  console.log('trackers', trackers);
});
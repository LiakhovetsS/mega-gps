const test = require('node:test');
const assert = require('node:assert');

const Parser = require('../../utils/Parser');
const MegaGPS = require('../../index');

test('Parser mega - current data', (t) => {
  const parser = new Parser();
  const csvData = 'id;extra;tlast;tvalid;tarc;lat;lng;azi;speed;alt;sat;hdop;csq;vcc;vbat;in1;temp1;temp2;fuel1;fuel2;fuel3;fuel_temp;geo_in\n' +
    '1;;1748874374;1748727227;1748874374;50504610;30490520;0;0;94;8;-1;18;1305;372;0;47;;;;;;-1';

  const result = parser.parse(csvData);
  let dop = Number(result[0].hdop);
  let azi = Number(result[0].azi);
  console.log('dop',dop);
  console.log(result);
  console.log(Math.round(azi/45) % 8);
  if(dop<0){
    // dop = -dop;
    dop = Math.abs(dop);
    console.log('dop&1', dop & 1);
    console.log('dop&8', dop & 8);
    if(dop&1){
      console.log('придушення GPS')
    };
    if(dop&8){
      console.log('Збій приймача GPS')
    };
  }
});

test('Parser mega - car list', (t) => {
  const parser = new Parser();
  const csvData = `id;name
3405;4814-passat
3926;4766 Prado
3927;4578 
3929;4936 Fabia
3934;1812 Ravon
3947;8439-Ravon
3948;4059-Fit
3949;5104-fiesta-fiesta
3950;1843 Ravon
3951;1842 Ravon
3952;2809 Ravon
29949;
29950;
29951;
29952;
29983;0373-Кіа Сід
29991;8831-Skoda Octavia
32738;7037-Kia Sportage
32790;4549-Кіа Сід`;
  const result = parser.parse(csvData);
  console.log(result);
});

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
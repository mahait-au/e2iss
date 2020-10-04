import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Contianer from "./Contianer/Contianer.js";
import PowerSource from "./PowerSource/PowerSource.js";
import PowerSource2 from "./PowerSource2/PowerSource2.js";
import ScientificInstrument from "./ScientificInstrument/ScientificInstrument.js";
import ComunicationDevice from "./ComunicationDevice/ComunicationDevice.js";
import OrientationFinder from "./OrientationFinder/OrientationFinder.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Sprite4 from "./Sprite4/Sprite4.js";
import Sprite5 from "./Sprite5/Sprite5.js";
import Sprite6 from "./Sprite6/Sprite6.js";
import Sprite7 from "./Sprite7/Sprite7.js";
import Sprite8 from "./Sprite8/Sprite8.js";
import Sprite9 from "./Sprite9/Sprite9.js";
import Sprite10 from "./Sprite10/Sprite10.js";
import Satellite from "./Satellite/Satellite.js";
import Next from "./Next/Next.js";
import Nasa from "./Nasa/Nasa.js";
import Pockocmoc from "./Pockocmoc/Pockocmoc.js";
import CsaAsc from "./CsaAsc/CsaAsc.js";
import Eesa from "./Eesa/Eesa.js";
import Jaxa from "./Jaxa/Jaxa.js";
import Sprite11 from "./Sprite11/Sprite11.js";
import Button1 from "./Button1/Button1.js";
import Button2 from "./Button2/Button2.js";
import Button3 from "./Button3/Button3.js";
import Button4 from "./Button4/Button4.js";
import Button5 from "./Button5/Button5.js";
import Button6 from "./Button6/Button6.js";
import Arrow1 from "./Arrow1/Arrow1.js";
import Arrow2 from "./Arrow2/Arrow2.js";
import Arrow3 from "./Arrow3/Arrow3.js";
import Arrow4 from "./Arrow4/Arrow4.js";
import Arrow5 from "./Arrow5/Arrow5.js";
import Sprite13 from "./Sprite13/Sprite13.js";
import Sprite12 from "./Sprite12/Sprite12.js";
import Sprite14 from "./Sprite14/Sprite14.js";
import Sprite15 from "./Sprite15/Sprite15.js";
import Sprite16 from "./Sprite16/Sprite16.js";
import Sprite17 from "./Sprite17/Sprite17.js";
import Sprite18 from "./Sprite18/Sprite18.js";
import Sprite19 from "./Sprite19/Sprite19.js";
import Sprite20 from "./Sprite20/Sprite20.js";
import Sprite21 from "./Sprite21/Sprite21.js";
import Sprite22 from "./Sprite22/Sprite22.js";
import Sprite23 from "./Sprite23/Sprite23.js";
import Sprite24 from "./Sprite24/Sprite24.js";
import Sprite25 from "./Sprite25/Sprite25.js";
import Earthviewfromspace from "./Earthviewfromspace/Earthviewfromspace.js";

const stage = new Stage({ costumeNumber: 4 });

const sprites = {
  Contianer: new Contianer({
    x: -14,
    y: -46,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 6
  }),
  PowerSource: new PowerSource({
    x: -14,
    y: 15,
    direction: 90,
    costumeNumber: 1,
    size: 60,
    visible: false,
    layerOrder: 2
  }),
  PowerSource2: new PowerSource2({
    x: -18,
    y: -113,
    direction: -90,
    costumeNumber: 1,
    size: 60,
    visible: false,
    layerOrder: 1
  }),
  ScientificInstrument: new ScientificInstrument({
    x: -56,
    y: -79,
    direction: 90,
    costumeNumber: 1,
    size: 70,
    visible: false,
    layerOrder: 10
  }),
  ComunicationDevice: new ComunicationDevice({
    x: 125,
    y: -49,
    direction: 90,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 46
  }),
  OrientationFinder: new OrientationFinder({
    x: -47,
    y: -90,
    direction: 179.96932965405543,
    costumeNumber: 1,
    size: 55.55555555555556,
    visible: false,
    layerOrder: 50
  }),
  Sprite1: new Sprite1({
    x: -40,
    y: 3,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  Sprite2: new Sprite2({
    x: -137,
    y: -133,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 8
  }),
  Sprite3: new Sprite3({
    x: 135,
    y: -92,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 9
  }),
  Sprite4: new Sprite4({
    x: 143,
    y: -19,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 45
  }),
  Sprite5: new Sprite5({
    x: 95,
    y: 40,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 44
  }),
  Sprite6: new Sprite6({
    x: 30,
    y: 64,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  Sprite7: new Sprite7({
    x: -49,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  Sprite8: new Sprite8({
    x: 4,
    y: -12,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 5
  }),
  Sprite9: new Sprite9({
    x: 24,
    y: -45,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 14
  }),
  Sprite10: new Sprite10({
    x: -5,
    y: 62,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 11
  }),
  Satellite: new Satellite({
    x: -171,
    y: 24,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 12
  }),
  Next: new Next({
    x: 129,
    y: -131,
    direction: 90,
    costumeNumber: 2,
    size: 80,
    visible: false,
    layerOrder: 13
  }),
  Nasa: new Nasa({
    x: -7,
    y: -26,
    direction: 90,
    costumeNumber: 1,
    size: 70,
    visible: false,
    layerOrder: 21
  }),
  Pockocmoc: new Pockocmoc({
    x: 128,
    y: 16,
    direction: 90,
    costumeNumber: 1,
    size: 70,
    visible: false,
    layerOrder: 22
  }),
  CsaAsc: new CsaAsc({
    x: -119,
    y: -103,
    direction: 90,
    costumeNumber: 1,
    size: 70,
    visible: false,
    layerOrder: 23
  }),
  Eesa: new Eesa({
    x: 114,
    y: -103,
    direction: 90,
    costumeNumber: 1,
    size: 70,
    visible: false,
    layerOrder: 24
  }),
  Jaxa: new Jaxa({
    x: -120,
    y: 34,
    direction: 90,
    costumeNumber: 1,
    size: 70,
    visible: false,
    layerOrder: 25
  }),
  Sprite11: new Sprite11({
    x: 21,
    y: 68,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 35
  }),
  Button1: new Button1({
    x: -137,
    y: -4,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 15
  }),
  Button2: new Button2({
    x: -5.9275190701597325,
    y: -4.926299154969968,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 17
  }),
  Button3: new Button3({
    x: 124.025095339925,
    y: -6.472687828423034,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 16
  }),
  Button4: new Button4({
    x: -133.06023670487724,
    y: -120.84419600812734,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 20
  }),
  Button5: new Button5({
    x: -3.648383350853976,
    y: -121.04250747745795,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 18
  }),
  Button6: new Button6({
    x: 126.98108804578081,
    y: -121.40741951557507,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 19
  }),
  Arrow1: new Arrow1({
    x: -161,
    y: 132,
    direction: 90,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 49
  }),
  Arrow2: new Arrow2({
    x: -168.64490922214785,
    y: 136.92218642856022,
    direction: 90,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 32
  }),
  Arrow3: new Arrow3({
    x: -161.04392251547316,
    y: 131.89606555649706,
    direction: 90,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 34
  }),
  Arrow4: new Arrow4({
    x: -164.32526962601185,
    y: 135.6669044677456,
    direction: 90,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 37
  }),
  Arrow5: new Arrow5({
    x: -165.41659802024066,
    y: 135.74924527636264,
    direction: 90,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 47
  }),
  Sprite13: new Sprite13({
    x: 34,
    y: 71,
    direction: 90,
    costumeNumber: 1,
    size: 90,
    visible: true,
    layerOrder: 26
  }),
  Sprite12: new Sprite12({
    x: -53,
    y: -33,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 27
  }),
  Sprite14: new Sprite14({
    x: -111,
    y: -40,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 28
  }),
  Sprite15: new Sprite15({
    x: -77,
    y: -88,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 30
  }),
  Sprite16: new Sprite16({
    x: -63,
    y: -151,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 29
  }),
  Sprite17: new Sprite17({
    x: -38,
    y: -76,
    direction: 90,
    costumeNumber: 1,
    size: 70,
    visible: false,
    layerOrder: 31
  }),
  Sprite18: new Sprite18({
    x: 38,
    y: 25,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 33
  }),
  Sprite19: new Sprite19({
    x: -5,
    y: -14,
    direction: 90,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 36
  }),
  Sprite20: new Sprite20({
    x: -1,
    y: -47,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 38
  }),
  Sprite21: new Sprite21({
    x: 21.154054739925442,
    y: -20.093455463347,
    direction: 90,
    costumeNumber: 1,
    size: 78,
    visible: false,
    layerOrder: 39
  }),
  Sprite22: new Sprite22({
    x: 19.852414676097595,
    y: -24.00444846397363,
    direction: 90,
    costumeNumber: 1,
    size: 78,
    visible: false,
    layerOrder: 40
  }),
  Sprite23: new Sprite23({
    x: 16.336707898396156,
    y: -7.527692418529256,
    direction: 90,
    costumeNumber: 1,
    size: 78,
    visible: false,
    layerOrder: 41
  }),
  Sprite24: new Sprite24({
    x: -28.340409865801433,
    y: -27.73305468548699,
    direction: 90,
    costumeNumber: 1,
    size: 78,
    visible: false,
    layerOrder: 42
  }),
  Sprite25: new Sprite25({
    x: 153,
    y: -204,
    direction: 90,
    costumeNumber: 1,
    size: 70,
    visible: false,
    layerOrder: 43
  }),
  Earthviewfromspace: new Earthviewfromspace({
    x: 35,
    y: -57,
    direction: 90,
    costumeNumber: 1,
    size: 70,
    visible: false,
    layerOrder: 48
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;

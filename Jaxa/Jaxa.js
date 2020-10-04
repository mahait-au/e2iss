import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Jaxa extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("JAXA", "./Jaxa/costumes/JAXA.png", { x: 155, y: 95 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Real Satellite Makers" },
        this.whenIReceiveRealSatelliteMakers
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "CSA ASC" },
        this.whenIReceiveCsaAsc
      ),
      new Trigger(Trigger.BROADCAST, { name: "EESA" }, this.whenIReceiveEesa),
      new Trigger(Trigger.BROADCAST, { name: "NASA" }, this.whenIReceiveNasa),
      new Trigger(
        Trigger.BROADCAST,
        { name: "POCKOCMOC" },
        this.whenIReceivePockocmoc
      ),
      new Trigger(Trigger.BROADCAST, { name: "Next" }, this.whenIReceiveNext)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-120, 34);
    this.size = 70;
    this.visible = false;
  }

  *whenIReceiveRealSatelliteMakers() {
    this.goto(-120, 34);
    this.size = 70;
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("JAXA");
    this.goto(142, 128);
    this.size = 60;
  }

  *whenIReceiveCsaAsc() {
    this.visible = false;
  }

  *whenIReceiveEesa() {
    this.visible = false;
  }

  *whenIReceiveNasa() {
    this.visible = false;
  }

  *whenIReceivePockocmoc() {
    this.visible = false;
  }

  *whenIReceiveNext() {
    this.visible = false;
  }
}

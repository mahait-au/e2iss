import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pockocmoc extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("POCKOCMOC", "./Pockocmoc/costumes/POCKOCMOC.png", {
        x: 155,
        y: 152
      })
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
      new Trigger(Trigger.BROADCAST, { name: "JAXA" }, this.whenIReceiveJaxa),
      new Trigger(Trigger.BROADCAST, { name: "Next" }, this.whenIReceiveNext)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(128, 16);
    this.size = 70;
    this.visible = false;
  }

  *whenIReceiveRealSatelliteMakers() {
    this.goto(128, 16);
    this.size = 70;
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("POCKOCMOC");
    this.size = 50;
    this.goto(153, 116);
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

  *whenIReceiveJaxa() {
    this.visible = false;
  }

  *whenIReceiveNext() {
    this.visible = false;
  }
}

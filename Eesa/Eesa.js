import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Eesa extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("EESA", "./Eesa/costumes/EESA.png", { x: 163, y: 76 })
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
      new Trigger(Trigger.BROADCAST, { name: "JAXA" }, this.whenIReceiveJaxa),
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
    this.goto(114, -103);
    this.size = 70;
    this.visible = false;
  }

  *whenIReceiveRealSatelliteMakers() {
    this.goto(114, -103);
    this.size = 70;
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("EESA");
    this.goto(144, 138);
    this.size = 60;
  }

  *whenIReceiveCsaAsc() {
    this.visible = false;
  }

  *whenIReceiveJaxa() {
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

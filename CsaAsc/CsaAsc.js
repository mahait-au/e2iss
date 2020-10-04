import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class CsaAsc extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("CSA ASC", "./CsaAsc/costumes/CSA ASC.png", {
        x: 143,
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
      new Trigger(Trigger.BROADCAST, { name: "JAXA" }, this.whenIReceiveJaxa),
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
    this.goto(-119, -103);
    this.size = 70;
    this.visible = false;
  }

  *whenIReceiveRealSatelliteMakers() {
    this.goto(-119, -103);
    this.size = 70;
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("CSA ASC");
    this.goto(161, 122);
    this.size = 50;
  }

  *whenIReceiveJaxa() {
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

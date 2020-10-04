import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Nasa extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("NASA", "./Nasa/costumes/NASA.png", { x: 161, y: 135 })
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
      new Trigger(
        Trigger.BROADCAST,
        { name: "CSA ASC" },
        this.whenIReceiveCsaAsc
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "POCKOCMOC" },
        this.whenIReceivePockocmoc
      ),
      new Trigger(Trigger.BROADCAST, { name: "EESA" }, this.whenIReceiveEesa),
      new Trigger(Trigger.BROADCAST, { name: "Next" }, this.whenIReceiveNext)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(-7, -26);
    this.size = 70;
  }

  *whenIReceiveRealSatelliteMakers() {
    this.goto(-7, -26);
    this.size = 70;
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("NASA");
    this.goto(152, 119);
    this.size = 50;
  }

  *whenIReceiveJaxa() {
    this.visible = false;
  }

  *whenIReceiveCsaAsc() {
    this.visible = false;
  }

  *whenIReceivePockocmoc() {
    this.visible = false;
  }

  *whenIReceiveEesa() {
    this.visible = false;
  }

  *whenIReceiveNext() {
    this.visible = false;
  }
}

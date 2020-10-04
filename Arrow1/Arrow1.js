import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Arrow1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("arrow1-b", "./Arrow1/costumes/arrow1-b.svg", {
        x: 28,
        y: 23
      })
    ];

    this.sounds = [new Sound("pop", "./Arrow1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "POCKOCMOC" },
        this.whenIReceivePockocmoc
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "CSA ASC" },
        this.whenIReceiveCsaAsc
      ),
      new Trigger(Trigger.BROADCAST, { name: "JAXA" }, this.whenIReceiveJaxa),
      new Trigger(Trigger.BROADCAST, { name: "EESA" }, this.whenIReceiveEesa),
      new Trigger(Trigger.BROADCAST, { name: "NASA" }, this.whenIReceiveNasa),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.moveAhead();
    this.visible = false;
  }

  *whenIReceivePockocmoc() {
    this.visible = true;
  }

  *whenIReceiveCsaAsc() {
    this.visible = true;
  }

  *whenIReceiveJaxa() {
    this.visible = true;
  }

  *whenIReceiveEesa() {
    this.visible = true;
  }

  *whenIReceiveNasa() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("Real Satellite Makers");
    this.visible = false;
  }
}

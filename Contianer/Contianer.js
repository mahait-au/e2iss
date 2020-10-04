import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Contianer extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Contianer/costumes/costume1.svg", {
        x: 131,
        y: 63.5
      })
    ];

    this.sounds = [new Sound("pop", "./Contianer/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Satellite Parts" },
        this.whenIReceiveSatelliteParts
      ),
      new Trigger(Trigger.BROADCAST, { name: "Next" }, this.whenIReceiveNext),
      new Trigger(Trigger.BROADCAST, { name: "Next" }, this.whenIReceiveNext2),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(-126, 127);
  }

  *whenIReceiveSatelliteParts() {
    yield* this.wait(0.5);
    this.visible = true;
  }

  *whenIReceiveNext() {
    this.visible = false;
  }

  *whenIReceiveNext2() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast(1);
    this.goto(-14, -46);
  }
}

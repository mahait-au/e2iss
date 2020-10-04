import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PowerSource extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./PowerSource/costumes/costume1.svg", {
        x: 62,
        y: 71.49999999999991
      })
    ];

    this.sounds = [new Sound("pop", "./PowerSource/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Satellite Parts" },
        this.whenIReceiveSatelliteParts
      ),
      new Trigger(Trigger.BROADCAST, { name: "Next" }, this.whenIReceiveNext),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(-149, -15);
  }

  *whenIReceiveSatelliteParts() {
    yield* this.wait(1);
    this.visible = true;
  }

  *whenIReceiveNext() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.moveBehind();
    this.broadcast(2);
    this.goto(-14, 15);
  }
}

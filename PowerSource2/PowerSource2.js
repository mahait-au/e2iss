import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PowerSource2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./PowerSource2/costumes/costume1.svg", {
        x: 62,
        y: 71.49999999999991
      })
    ];

    this.sounds = [new Sound("pop", "./PowerSource2/sounds/pop.wav")];

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
    this.direction = 90;
    this.goto(-149, -14);
    this.visible = false;
  }

  *whenIReceiveSatelliteParts() {
    yield* this.wait(1);
    this.visible = true;
  }

  *whenIReceiveNext() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.direction += 180;
    this.broadcast(2);
    this.direction = -90;
    this.goto(-18, -113);
    this.moveBehind();
  }
}

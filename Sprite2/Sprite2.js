import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.svg", {
        x: 45.72457627118635,
        y: 58.756470847457635
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Satellite Parts" },
        this.whenIReceiveSatelliteParts
      ),
      new Trigger(Trigger.BROADCAST, { name: "2" }, this.whenIReceive2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(-137, -133);
  }

  *whenIReceiveSatelliteParts() {
    yield* this.wait(1);
    this.visible = true;
  }

  *whenIReceive2() {
    this.visible = false;
    yield* this.wait(0.5);
  }
}

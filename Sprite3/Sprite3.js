import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite3/costumes/costume1.svg", {
        x: 33.75,
        y: 9.25
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Satellite Parts" },
        this.whenIReceiveSatelliteParts
      ),
      new Trigger(Trigger.BROADCAST, { name: "3" }, this.whenIReceive3)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(135, -92);
  }

  *whenIReceiveSatelliteParts() {
    yield* this.wait(1.5);
    this.visible = true;
  }

  *whenIReceive3() {
    this.visible = false;
    yield* this.wait(0.5);
  }
}

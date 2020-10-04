import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite4/costumes/costume1.svg", {
        x: 80.75,
        y: 56.25
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite4/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Satellite Parts" },
        this.whenIReceiveSatelliteParts
      ),
      new Trigger(Trigger.BROADCAST, { name: "4" }, this.whenIReceive4)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(143, -19);
  }

  *whenIReceiveSatelliteParts() {
    yield* this.wait(2);
    this.visible = true;
  }

  *whenIReceive4() {
    this.visible = false;
    yield* this.wait(0.5);
  }
}

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Button6 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button1", "./Button6/costumes/button1.svg", {
        x: 42.625,
        y: 43.367999999999995
      })
    ];

    this.sounds = [new Sound("pop", "./Button6/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Level 1" },
        this.whenIReceiveLevel1
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    yield* this.wait(3);
    this.visible = true;
  }

  *whenIReceiveLevel1() {
    this.visible = false;
  }
}

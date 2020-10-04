import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite7 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite7/costumes/costume1.svg", {
        x: 129.75,
        y: 60.25
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite7/sounds/pop.wav")];

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
    this.goto(-49, 28);
    this.visible = false;
    yield* this.wait(2.5);
    this.visible = true;
  }

  *whenIReceiveLevel1() {
    this.visible = false;
  }
}

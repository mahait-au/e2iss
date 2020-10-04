import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite6 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite6/costumes/costume1.svg", {
        x: 227.13138736151495,
        y: 86.66984914659454
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite6/sounds/pop.wav")];

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
    this.goto(30, -65);
    this.visible = true;
    yield* this.wait(2);
    this.goto(30, 64);
  }

  *whenIReceiveLevel1() {
    this.visible = false;
  }
}

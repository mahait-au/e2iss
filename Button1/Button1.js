import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Button1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button1", "./Button1/costumes/button1.svg", {
        x: 42.625,
        y: 43.367999999999995
      }),
      new Costume("costume1", "./Button1/costumes/costume1.svg", {
        x: 22.49663791419127,
        y: 40.42301132887701
      })
    ];

    this.sounds = [new Sound("pop", "./Button1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "button1";
    this.visible = false;
    yield* this.wait(3);
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.visible = false;
    this.broadcast("Level 1");
  }
}

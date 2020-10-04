import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite9 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite9/costumes/costume1.svg", {
        x: 108.50316397863787,
        y: 30.559043775068687
      }),
      new Costume("costume2", "./Sprite9/costumes/costume2.svg", {
        x: 120.96710057059302,
        y: 22.734864817581013
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite9/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Make Your Own" },
        this.whenIReceiveMakeYourOwn
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(24, -45);
    this.visible = false;
  }

  *whenIReceiveMakeYourOwn() {
    this.costume = "costume1";
    this.visible = true;
    yield* this.wait(3);
    this.costume = "costume2";
    yield* this.wait(2);
    this.visible = false;
  }
}

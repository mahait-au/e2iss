import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite8 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite8/costumes/costume1.svg", {
        x: 201.73621697338,
        y: 54.89822966424572
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite8/sounds/pop.wav")];

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
    this.goto(4, -12);
    this.visible = false;
  }

  *whenIReceiveLevel1() {
    this.visible = true;
    yield* this.wait(2);
    this.visible = false;
    this.broadcast("Satellite Parts");
  }
}

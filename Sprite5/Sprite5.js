import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite5/costumes/costume1.svg", {
        x: 100.75,
        y: 77.25
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite5/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Satellite Parts" },
        this.whenIReceiveSatelliteParts
      ),
      new Trigger(Trigger.BROADCAST, { name: "5" }, this.whenIReceive5)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(95, 40);
  }

  *whenIReceiveSatelliteParts() {
    yield* this.wait(2.5);
    this.visible = true;
  }

  *whenIReceive5() {
    this.visible = false;
  }
}

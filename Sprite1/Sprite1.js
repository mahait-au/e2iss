import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 133.73809023809537,
        y: 87.07141357142851
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Satellite Parts" },
        this.whenIReceiveSatelliteParts
      ),
      new Trigger(Trigger.BROADCAST, { name: "1" }, this.whenIReceive1)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(-40, 3);
  }

  *whenIReceiveSatelliteParts() {
    yield* this.wait(0.5);
    this.visible = true;
  }

  *whenIReceive1() {
    this.visible = false;
  }
}

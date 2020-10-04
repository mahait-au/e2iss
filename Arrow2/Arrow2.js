import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Arrow2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("arrow1-b", "./Arrow2/costumes/arrow1-b.svg", {
        x: 28,
        y: 23
      })
    ];

    this.sounds = [new Sound("pop", "./Arrow2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Types of Satellites" },
        this.whenIReceiveTypesOfSatellites
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveTypesOfSatellites() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("Next");
    this.visible = false;
  }
}

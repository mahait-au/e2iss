import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class OrientationFinder extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./OrientationFinder/costumes/costume1.svg", {
        x: 119.35278861922274,
        y: 88.00216440526724
      })
    ];

    this.sounds = [new Sound("pop", "./OrientationFinder/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Satellite Parts" },
        this.whenIReceiveSatelliteParts
      ),
      new Trigger(Trigger.BROADCAST, { name: "Next" }, this.whenIReceiveNext),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(17, 65);
    this.visible = false;
  }

  *whenIReceiveSatelliteParts() {
    yield* this.wait(2.5);
    this.visible = true;
    yield* this.wait(1);
    this.broadcast("Make Your Own");
  }

  *whenIReceiveNext() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast(5);
    this.goto(-47, -90);
    this.moveAhead();
    yield* this.wait(1);
    this.broadcast("Finished");
  }
}

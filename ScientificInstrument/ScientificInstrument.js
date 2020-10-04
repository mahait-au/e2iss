import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ScientificInstrument extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./ScientificInstrument/costumes/costume1.svg", {
        x: 84.00512,
        y: 77
      })
    ];

    this.sounds = [new Sound("pop", "./ScientificInstrument/sounds/pop.wav")];

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
    this.visible = false;
    this.goto(180, -90);
  }

  *whenIReceiveSatelliteParts() {
    yield* this.wait(1.5);
    this.visible = true;
  }

  *whenIReceiveNext() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast(3);
    this.goto(-56, -79);
  }
}

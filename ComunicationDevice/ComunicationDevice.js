import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ComunicationDevice extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./ComunicationDevice/costumes/costume1.svg", {
        x: 176.5,
        y: 86.03906727113177
      })
    ];

    this.sounds = [new Sound("pop", "./ComunicationDevice/sounds/pop.wav")];

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
    this.goto(195, 67);
    this.visible = false;
  }

  *whenIReceiveSatelliteParts() {
    yield* this.wait(2);
    this.visible = true;
  }

  *whenIReceiveNext() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast(4);
    this.goto(125, -49);
  }
}

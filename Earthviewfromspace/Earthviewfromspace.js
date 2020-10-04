import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Earthviewfromspace extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "earthviewfromspace",
        "./Earthviewfromspace/costumes/earthviewfromspace.png",
        { x: 480, y: 319 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Earth View from Satellites" },
        this.whenIReceiveEarthViewFromSatellites
      ),
      new Trigger(Trigger.BROADCAST, { name: "Next" }, this.whenIReceiveNext)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveEarthViewFromSatellites() {
    this.visible = true;
  }

  *whenIReceiveNext() {
    this.visible = false;
  }
}

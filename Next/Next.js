import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Next extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Screen Shot 2020-10-03 at 4",
        "./Next/costumes/Screen Shot 2020-10-03 at 4.png",
        { x: 370, y: 140 }
      ),
      new Costume("Button3-b", "./Next/costumes/Button3-b.svg", {
        x: 44.83099999999999,
        y: 31.180000000000007
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Finished" },
        this.whenIReceiveFinished
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveFinished() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("Next");
    this.visible = false;
  }
}

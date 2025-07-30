/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Gem4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("gem", "./Gem4/costumes/gem.png", { x: 276, y: 223.5 }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "LEVEL 4" },
        this.whenIReceiveLevel4
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "End" }, this.whenIReceiveEnd),
    ];
  }

  *whenIReceiveLevel4() {
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.size = 10;
    this.goto(-186, 37);
  }

  *whenIReceiveEnd() {
    this.visible = false;
  }
}

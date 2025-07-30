/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Gem3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("gem", "./Gem3/costumes/gem.png", { x: 276, y: 223.5 }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "LEVEL 3" },
        this.whenIReceiveLevel3
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenIReceiveLevel3() {
    this.visible = true;
    this.moveAhead();
  }

  *whenbackdropswitchesto() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(174, 33);
    this.size = 15;
  }
}

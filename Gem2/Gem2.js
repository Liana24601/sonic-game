/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Gem2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("gem", "./Gem2/costumes/gem.png", { x: 276, y: 223.5 }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "LEVEL 2" },
        this.whenIReceiveLevel2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenIReceiveLevel2() {
    this.visible = true;
  }

  *whenbackdropswitchesto() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(161, 143);
    this.size = 15;
  }
}

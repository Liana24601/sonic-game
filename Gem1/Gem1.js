/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Gem1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("gem", "./Gem1/costumes/gem.png", { x: 276, y: 223.5 }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "LEVEL 1" },
        this.whenIReceiveLevel1
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(147, -150);
    this.size = 15;
  }

  *whenIReceiveLevel1() {
    this.visible = true;
    this.moveAhead();
  }

  *whenbackdropswitchesto() {
    this.visible = false;
  }
}

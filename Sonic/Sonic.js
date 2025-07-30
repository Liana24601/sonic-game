/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sonic extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "pixel1-removebg-preview - Copy2",
        "./Sonic/costumes/pixel1-removebg-preview - Copy2.png",
        { x: 230, y: 295 }
      ),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "End" }, this.whenIReceiveEnd),
      new Trigger(Trigger.BROADCAST, { name: "E2" }, this.whenIReceiveE2),
      new Trigger(Trigger.BROADCAST, { name: "E4" }, this.whenIReceiveE4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "FINISHED" },
        this.whenIReceiveFinished
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(3, -96);
    this.size = 50;
  }

  *whenIReceiveEnd() {
    this.visible = true;
  }

  *whenIReceiveE2() {
    yield* this.glide(0.5, 3, -68);
    yield* this.glide(0.5, 3, -96);
    yield* this.wait(1);
    yield* this.glide(0.5, 3, -68);
    yield* this.glide(0.5, 3, -96);
  }

  *whenIReceiveE4() {
    yield* this.glide(0.5, 3, -68);
    yield* this.glide(0.5, 3, -96);
  }

  *whenIReceiveFinished() {
    this.visible = false;
  }
}

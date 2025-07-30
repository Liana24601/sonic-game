/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("forest", "./Stage/costumes/forest.png", { x: 480, y: 360 }),
      new Costume("sky", "./Stage/costumes/sky.png", { x: 480, y: 360 }),
      new Costume("lake", "./Stage/costumes/lake.png", { x: 480, y: 360 }),
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 403.90697674418607,
        y: 207.99999999999994,
      }),
      new Costume("i do", "./Stage/costumes/i do.svg", {
        x: 403.90697674418607,
        y: 207.99999999999994,
      }),
      new Costume("flower garden", "./Stage/costumes/flower garden.png", {
        x: 480,
        y: 360,
      }),
      new Costume("desert", "./Stage/costumes/desert.png", { x: 480, y: 360 }),
      new Costume("wedding", "./Stage/costumes/wedding.png", {
        x: 478,
        y: 360,
      }),
    ];

    this.sounds = [
      new Sound("Video Game 1", "./Stage/sounds/Video Game 1.wav"),
      new Sound("Emotional Piano", "./Stage/sounds/Emotional Piano.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "LEVEL 1" },
        this.whenIReceiveLevel1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "LEVEL 2" },
        this.whenIReceiveLevel2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "LEVEL 3" },
        this.whenIReceiveLevel3
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "LEVEL 4" },
        this.whenIReceiveLevel4
      ),
      new Trigger(Trigger.BROADCAST, { name: "End" }, this.whenIReceiveEnd),
      new Trigger(
        Trigger.BROADCAST,
        { name: "FINISHED" },
        this.whenIReceiveFinished
      ),
    ];

    this.vars.control = 1;

    this.watchers.control = new Watcher({
      label: "control",
      style: "normal",
      visible: false,
      value: () => this.vars.control,
      x: 245,
      y: 175,
    });
  }

  *whenGreenFlagClicked() {
    this.vars.control = 0;
    this.costume = "backdrop1";
  }

  *whenIReceiveStart() {
    this.costume = "forest";
  }

  *whenIReceiveLevel1() {
    this.costume = "sky";
  }

  *whenIReceiveLevel2() {
    this.costume = "lake";
  }

  *whenIReceiveLevel3() {
    this.costume = "flower garden";
  }

  *whenGreenFlagClicked2() {
    this.watchers.control.visible = false;
    while (true) {
      if (this.toNumber(this.vars.control) === 0) {
        yield* this.playSoundUntilDone("Video Game 1");
      } else {
        yield* this.playSoundUntilDone("Emotional Piano");
      }
      yield;
    }
  }

  *whenIReceiveLevel4() {
    this.costume = "desert";
  }

  *whenIReceiveEnd() {
    this.vars.control = 1;
    this.costume = "wedding";
  }

  *whenIReceiveFinished() {
    this.costume = "i do";
  }
}

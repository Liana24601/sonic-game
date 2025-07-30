/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Eggman extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("eggman1", "./Eggman/costumes/eggman1.png", {
        x: 315,
        y: 139,
      }),
      new Costume("explode", "./Eggman/costumes/explode.png", {
        x: 428,
        y: 292,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "D23" }, this.whenIReceiveD23),
      new Trigger(Trigger.BROADCAST, { name: "D24" }, this.whenIReceiveD24),
      new Trigger(Trigger.BROADCAST, { name: "D25" }, this.whenIReceiveD25),
      new Trigger(Trigger.BROADCAST, { name: "D26" }, this.whenIReceiveD26),
      new Trigger(Trigger.BROADCAST, { name: "D28" }, this.whenIReceiveD28),
      new Trigger(Trigger.BROADCAST, { name: "D27" }, this.whenIReceiveD27),
      new Trigger(Trigger.BROADCAST, { name: "D30" }, this.whenIReceiveD30),
      new Trigger(Trigger.BROADCAST, { name: "D31" }, this.whenIReceiveD31),
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "eggman1";
    this.visible = false;
    this.goto(0, -30);
    this.size = 100;
  }

  *whenIReceiveD23() {
    this.visible = true;
  }

  *whenIReceiveD24() {
    this.visible = false;
  }

  *whenIReceiveD25() {
    this.visible = true;
  }

  *whenIReceiveD26() {
    this.visible = false;
  }

  *whenIReceiveD28() {
    this.visible = false;
  }

  *whenIReceiveD27() {
    this.visible = true;
  }

  *whenIReceiveD30() {
    this.costume = "explode";
    this.visible = true;
  }

  *whenIReceiveD31() {
    this.visible = false;
  }
}

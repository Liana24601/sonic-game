/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Amy extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "pixel1-removebg-preview - Copy (2)",
        "./Amy/costumes/pixel1-removebg-preview - Copy (2).png",
        { x: 221, y: 273 }
      ),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Scene 1" },
        this.whenIReceiveScene1
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "D2" }, this.whenIReceiveD2),
      new Trigger(Trigger.BROADCAST, { name: "D4" }, this.whenIReceiveD4),
      new Trigger(Trigger.BROADCAST, { name: "D6" }, this.whenIReceiveD6),
      new Trigger(
        Trigger.BROADCAST,
        { name: "LEVEL 1" },
        this.whenIReceiveLevel1
      ),
      new Trigger(Trigger.BROADCAST, { name: "D8" }, this.whenIReceiveD8),
      new Trigger(Trigger.BROADCAST, { name: "D10" }, this.whenIReceiveD10),
      new Trigger(Trigger.BROADCAST, { name: "D12" }, this.whenIReceiveD12),
      new Trigger(Trigger.BROADCAST, { name: "D14" }, this.whenIReceiveD14),
      new Trigger(
        Trigger.BROADCAST,
        { name: "LEVEL 2" },
        this.whenIReceiveLevel2
      ),
      new Trigger(Trigger.BROADCAST, { name: "D16" }, this.whenIReceiveD16),
      new Trigger(Trigger.BROADCAST, { name: "D19" }, this.whenIReceiveD19),
      new Trigger(Trigger.BROADCAST, { name: "D21" }, this.whenIReceiveD21),
      new Trigger(Trigger.BROADCAST, { name: "End" }, this.whenIReceiveEnd),
      new Trigger(Trigger.BROADCAST, { name: "E1" }, this.whenIReceiveE1),
      new Trigger(
        Trigger.BROADCAST,
        { name: "FINISHED" },
        this.whenIReceiveFinished
      ),
    ];
  }

  *whenIReceiveScene1() {
    this.visible = true;
    this.goto(-226, -30);
    yield* this.glide(1, -82, -30);
    yield* this.glide(0.5, -82, -2);
    yield* this.glide(0.5, -82, -30);
    yield* this.wait(1);
    this.broadcast("D1");
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.size = 55;
    this.moveAhead();
  }

  *whenIReceiveD2() {
    yield* this.glide(0.5, -82, -2);
    yield* this.glide(0.5, -82, -30);
    yield* this.wait(1);
    this.broadcast("D3");
  }

  *whenIReceiveD4() {
    yield* this.glide(0.5, -82, -2);
    yield* this.glide(0.5, -84, -30);
    yield* this.wait(2);
    this.broadcast("D5");
  }

  *whenIReceiveD6() {
    yield* this.glide(0.5, -82, -2);
    yield* this.glide(0.5, -82, -30);
    yield* this.glide(0.5, -82, -2);
    yield* this.glide(0.5, -82, -30);
    yield* this.wait(1);
    this.broadcast("D7");
  }

  *whenIReceiveLevel1() {
    this.visible = false;
  }

  *whenIReceiveD8() {
    this.visible = true;
    yield* this.wait(3);
    this.broadcast("D9");
    this.visible = false;
  }

  *whenIReceiveD10() {
    this.visible = true;
    yield* this.wait(1);
    yield* this.glide(0.5, -82, -2);
    yield* this.glide(0.5, -84, -30);
    yield* this.wait(2);
    this.broadcast("D11");
    this.visible = false;
  }

  *whenIReceiveD12() {
    this.visible = true;
    yield* this.wait(5);
    this.visible = false;
    this.broadcast("D13");
  }

  *whenIReceiveD14() {
    this.visible = true;
    yield* this.wait(4);
    this.visible = false;
    this.broadcast("D15");
  }

  *whenIReceiveLevel2() {
    this.moveAhead();
    this.visible = false;
  }

  *whenIReceiveD16() {
    this.visible = true;
    yield* this.wait(4);
    this.visible = false;
    this.broadcast("D17");
  }

  *whenbackdropswitchesto() {
    yield* this.wait(2);
    this.visible = true;
    yield* this.wait(2);
    this.visible = false;
    this.broadcast("D18");
  }

  *whenIReceiveD19() {
    this.visible = true;
    yield* this.wait(5);
    this.broadcast("D20");
    this.visible = false;
  }

  *whenIReceiveD21() {
    this.visible = true;
    yield* this.wait(3);
    this.visible = false;
  }

  *whenIReceiveEnd() {
    this.visible = true;
    this.goto(-153, -97);
  }

  *whenIReceiveE1() {
    yield* this.glide(0.5, -153, -69);
    yield* this.glide(0.5, -153, -97);
  }

  *whenIReceiveFinished() {
    this.visible = false;
  }
}

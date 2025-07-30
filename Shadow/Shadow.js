/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Shadow extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("main", "./Shadow/costumes/main.png", { x: 236, y: 355 }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "D1" }, this.whenIReceiveD1),
      new Trigger(Trigger.BROADCAST, { name: "D3" }, this.whenIReceiveD3),
      new Trigger(Trigger.BROADCAST, { name: "D5" }, this.whenIReceiveD5),
      new Trigger(Trigger.BROADCAST, { name: "D7" }, this.whenIReceiveD7),
      new Trigger(
        Trigger.BROADCAST,
        { name: "LEVEL 1" },
        this.whenIReceiveLevel1
      ),
      new Trigger(Trigger.BROADCAST, { name: "D9" }, this.whenIReceiveD9),
      new Trigger(Trigger.BROADCAST, { name: "D11" }, this.whenIReceiveD11),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "left arrow" },
        this.whenKeyLeftArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "right arrow" },
        this.whenKeyRightArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "up arrow" },
        this.whenKeyUpArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "down arrow" },
        this.whenKeyDownArrowPressed
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "LEVEL 2" },
        this.whenIReceiveLevel2
      ),
      new Trigger(Trigger.BROADCAST, { name: "D13" }, this.whenIReceiveD13),
      new Trigger(Trigger.BROADCAST, { name: "D15" }, this.whenIReceiveD15),
      new Trigger(Trigger.BROADCAST, { name: "D17" }, this.whenIReceiveD17),
      new Trigger(
        Trigger.BROADCAST,
        { name: "LEVEL 3" },
        this.whenIReceiveLevel3
      ),
      new Trigger(Trigger.BROADCAST, { name: "D22" }, this.whenIReceiveD22),
      new Trigger(
        Trigger.BROADCAST,
        { name: "LEVEL 4" },
        this.whenIReceiveLevel4
      ),
      new Trigger(Trigger.BROADCAST, { name: "D32" }, this.whenIReceiveD32),
      new Trigger(Trigger.BROADCAST, { name: "End" }, this.whenIReceiveEnd),
      new Trigger(Trigger.BROADCAST, { name: "E3" }, this.whenIReceiveE3),
      new Trigger(Trigger.BROADCAST, { name: "E5" }, this.whenIReceiveE5),
      new Trigger(
        Trigger.BROADCAST,
        { name: "FINISHED" },
        this.whenIReceiveFinished
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "main";
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.visible = true;
    this.size = 50;
    this.moveAhead();
    this.goto(89, -30);
    this.broadcast("Scene 1");
  }

  *whenIReceiveD1() {
    yield* this.glide(0.5, 89, -2);
    yield* this.glide(0.5, 89, -30);
    yield* this.wait(1);
    yield* this.glide(0.5, 89, -2);
    yield* this.glide(0.5, 89, -30);
    yield* this.wait(1);
    yield* this.glide(0.5, 89, -2);
    yield* this.glide(0.5, 89, -30);
    yield* this.wait(1);
    yield* this.wait(1);
    yield* this.glide(0.5, 89, -2);
    yield* this.glide(0.5, 89, -30);
    yield* this.wait(1);
    this.broadcast("D2");
  }

  *whenIReceiveD3() {
    yield* this.glide(0.5, 89, -2);
    yield* this.glide(0.5, 89, -30);
    yield* this.wait(1);
    this.broadcast("D4");
  }

  *whenIReceiveD5() {
    yield* this.glide(0.5, 89, -2);
    yield* this.glide(0.5, 89, -30);
    yield* this.glide(0.5, 89, -2);
    yield* this.glide(0.5, 89, -30);
    yield* this.glide(0.5, 89, -2);
    yield* this.glide(0.5, 89, -30);
    yield* this.glide(0.5, 89, -2);
    yield* this.glide(0.5, 89, -30);
    yield* this.wait(2);
    yield* this.glide(0.5, 89, -2);
    yield* this.glide(0.5, 89, -30);
    this.broadcast("D6");
  }

  *whenIReceiveD7() {
    yield* this.wait(1);
    yield* this.glide(0.5, 89, -2);
    yield* this.glide(0.5, 89, -30);
    yield* this.wait(1);
    yield* this.glide(0.5, 89, -2);
    yield* this.glide(0.5, 89, -30);
    yield* this.wait(2);
    yield* this.broadcastAndWait("LEVEL 1");
  }

  *whenIReceiveLevel1() {
    this.goto(-136, 137);
    this.size = 7;
    yield* this.wait(3);
    this.broadcast("D8");
  }

  *whenIReceiveD9() {
    yield* this.wait(2);
    this.broadcast("D10");
  }

  *whenIReceiveD11() {
    yield* this.wait(5);
    while (true) {
      if (this.touching(this.sprites["Gem1"].andClones())) {
        this.broadcast("private message");
        yield* this.wait(2);
        this.broadcast("LEVEL 2");
      }
      yield;
    }
  }

  *whenKeyLeftArrowPressed() {
    this.x -= 5;
    if (this.touching(this.sprites["Maze"].andClones())) {
      this.x += 5;
    }
  }

  *whenKeyRightArrowPressed() {
    this.x += 5;
    if (this.touching(this.sprites["Maze"].andClones())) {
      this.x -= 5;
    }
  }

  *whenKeyUpArrowPressed() {
    this.y += 5;
    if (this.touching(this.sprites["Maze"].andClones())) {
      this.y -= 5;
    }
  }

  *whenKeyDownArrowPressed() {
    this.y -= 5;
    if (this.touching(this.sprites["Maze"].andClones())) {
      this.y += 5;
    }
  }

  *whenIReceiveLevel2() {
    this.goto(-146, -144);
    yield* this.wait(2);
    yield* this.wait(4);
    this.broadcast("D12");
  }

  *whenIReceiveD13() {
    yield* this.wait(3);
    this.broadcast("D14");
  }

  *whenIReceiveD15() {
    yield* this.wait(3);
    this.broadcast("D16");
  }

  *whenIReceiveD17() {
    yield* this.wait(2);
    while (true) {
      if (this.touching(this.sprites["Gem2"].andClones())) {
        this.broadcast("private message");
        yield* this.wait(2);
        this.broadcast("LEVEL 3");
      }
      yield;
    }
  }

  *whenIReceiveLevel3() {
    this.size = 5;
    this.goto(-120, 87);
  }

  *whenIReceiveD22() {
    yield* this.wait(2);
    while (true) {
      if (this.touching(this.sprites["Gem3"].andClones())) {
        this.broadcast("private message");
        yield* this.wait(2);
        this.broadcast("LEVEL 4");
      }
      yield;
    }
  }

  *whenIReceiveLevel4() {
    this.goto(190, 35);
    this.size = 4;
  }

  *whenIReceiveD32() {
    yield* this.wait(2);
    while (true) {
      if (this.touching(this.sprites["Gem4"].andClones())) {
        this.broadcast("private message");
        yield* this.wait(2);
        this.broadcast("End");
      }
      yield;
    }
  }

  *whenIReceiveEnd() {
    this.visible = true;
    this.size = 50;
    this.goto(273, -99);
    yield* this.glide(0.8, 149, -100);
    this.broadcast("E1");
  }

  *whenIReceiveE3() {
    yield* this.glide(0.5, 149, -72);
    yield* this.glide(0.5, 149, -100);
  }

  *whenIReceiveE5() {
    yield* this.glide(0.5, 149, -72);
    yield* this.glide(0.5, 149, -100);
    yield* this.wait(1);
    yield* this.glide(0.5, 149, -72);
    yield* this.glide(0.5, 149, -100);
  }

  *whenIReceiveFinished() {
    this.visible = false;
  }
}

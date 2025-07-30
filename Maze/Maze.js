/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Maze extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("maze 1", "./Maze/costumes/maze 1.png", { x: 318, y: 319 }),
      new Costume("maze 2", "./Maze/costumes/maze 2.png", { x: 243, y: 242 }),
      new Costume(
        "star_maze-removebg-preview",
        "./Maze/costumes/star_maze-removebg-preview.png",
        { x: 405, y: 358 }
      ),
      new Costume("circle 3", "./Maze/costumes/circle 3.png", {
        x: 167,
        y: 174,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
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
      new Trigger(Trigger.BROADCAST, { name: "End" }, this.whenIReceiveEnd),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.size = 100;
    this.costume = "maze 1";
    this.goto(6, -2);
  }

  *whenIReceiveLevel1() {
    this.visible = true;
  }

  *whenIReceiveLevel2() {
    this.visible = true;
    this.size = 140;
    this.costume = "maze 2";
  }

  *whenbackdropswitchesto() {
    this.size = 220;
    this.costume = "circle 3";
  }

  *whenbackdropswitchesto2() {
    this.size = 100;
    this.costume = "star_maze-removebg-preview";
  }

  *whenIReceiveEnd() {
    this.visible = false;
  }
}

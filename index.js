import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Shadow from "./Shadow/Shadow.js";
import Sonic from "./Sonic/Sonic.js";
import Amy from "./Amy/Amy.js";
import Gem1 from "./Gem1/Gem1.js";
import Maze from "./Maze/Maze.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Gem2 from "./Gem2/Gem2.js";
import Gem3 from "./Gem3/Gem3.js";
import Gem4 from "./Gem4/Gem4.js";
import Textbox from "./Textbox/Textbox.js";
import Eggman from "./Eggman/Eggman.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Shadow: new Shadow({
    x: 149,
    y: -100,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 7,
  }),
  Sonic: new Sonic({
    x: 3,
    y: -96,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 6,
  }),
  Amy: new Amy({
    x: -153,
    y: -97,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 55.00000000000001,
    visible: false,
    layerOrder: 10,
  }),
  Gem1: new Gem1({
    x: 147,
    y: -150,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 15,
    visible: false,
    layerOrder: 8,
  }),
  Maze: new Maze({
    x: 6,
    y: -2,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 3,
    size: 100,
    visible: false,
    layerOrder: 2,
  }),
  Sprite1: new Sprite1({
    x: 0,
    y: -50,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1,
  }),
  Gem2: new Gem2({
    x: 161,
    y: 143,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 15,
    visible: false,
    layerOrder: 3,
  }),
  Gem3: new Gem3({
    x: 174,
    y: 33,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 15,
    visible: false,
    layerOrder: 11,
  }),
  Gem4: new Gem4({
    x: -186,
    y: 37,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 10,
    visible: false,
    layerOrder: 4,
  }),
  Textbox: new Textbox({
    x: 2,
    y: 126,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 78,
    size: 100,
    visible: false,
    layerOrder: 9,
  }),
  Eggman: new Eggman({
    x: 0,
    y: -30,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 5,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;

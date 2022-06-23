import * as PIXI from "pixi.js";
import Matter from "matter-js";
import { Game } from "./game";

//Make Platform 2

export class Platform2 extends PIXI.Sprite {
    private rigidBody: Matter.Body;
  
    constructor(texture: PIXI.Texture, game: Game) {
      super(texture);
      this.x = 1200;
      this.y = 150;
      this.anchor.set(0.5);
      this.width = 200
      this.height = 100
      this.rigidBody = Matter.Bodies.rectangle(this.x, this.y, this.width, this.height, {
        isStatic: true
      });
      Matter.Composite.add(game.engine.world, this.rigidBody);
  
      this.x = this.rigidBody.position.x;
      this.y = this.rigidBody.position.y;
    }
  }
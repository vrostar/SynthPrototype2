import * as PIXI from 'pixi.js'

export class Seed extends PIXI.Sprite {
public speed : number

    constructor(texture: PIXI.Texture) {
        super(texture)
        this.x = 1200
        this.y = 300
        this.anchor.set(0.5)
        this.scale.set(1)

    }
   
    public hitCapy(){
        this.x = 10000000
   }
}
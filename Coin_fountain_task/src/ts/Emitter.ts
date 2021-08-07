import { ParticleContainer } from 'pixi.js';
import particles = require('pixi-particles');


export class Emitter extends ParticleContainer {
  private pEmitter: particles.Emitter;

  constructor(maxCount: number, props?:any) {
    super(maxCount, props);
    this.pEmitter = new particles.Emitter(this,
      "../assets/img/coin.png",
      {
        "alpha": {
          "start": 1,
          "end": 0.31
        },
        "scale": {
          "start": 0.5,
          "end": 1,
          "minimumScaleMultiplier": 1
        },
        "color": {
          "start": "#ffffff",
          "end": "#9ff3ff"
        },
        "speed": {
          "start": 1000,
          "end": 200,
          "minimumSpeedMultiplier": 1
        },
        "acceleration": {
          "x": 0,
          "y": 0
        },
        "maxSpeed": 0,
        "startRotation": {
          "min": 225,
          "max": 320
        },
        "noRotation": false,
        "rotationSpeed": {
          "min": 0,
          "max": 20
        },
        "lifetime": {
          "min": 0.25,
          "max": 0.5
        },
        "blendMode": "normal",
        "frequency": 0.001,
        "emitterLifetime": -1,
        "maxParticles": 1000,
        "pos": {
          "x": 0,
          "y": 0
        },
        "addAtBack": false,
        "spawnType": "point"
      });
  }

  public start(): void {
    this.pEmitter.emit = true;
  }

  public update(delta: number): void {
    this.pEmitter.update(delta * 0.001);
  }
}

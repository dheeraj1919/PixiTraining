import {
  Application, Container,Sprite,Texture,Resource
} from 'pixi.js';

import { preLoader } from './PreLoader';
import assets from './assets';
import { Emitter } from './Emitter';
import { getTexture } from './Textures';
import { sound } from '@pixi/sound';

export class Game {
    private stage: Container;

    private readonly app: Application;

    private isInitialized = false;

    private emitter: Emitter | undefined;

    constructor(app:Application) {
      this.app = app;
      this.stage = app.stage;
      sound.add('play',".src/audio/happy.mp3");
      preLoader(assets, () => {
        this.isInitialized = true;
        this.emitter = new Emitter(1000, { scale: true });
        const back=this.createBackground();
        this.stage.addChild(back);
        this.stage.addChild(this.emitter);
        this.emitter.start();
        this.emitter.x = this.app.view.width / 2;
        this.emitter.y = this.app.view.height / 2;
       sound.play("play");
      });
      console.warn(this.app);
    }
private createBackground():any
{
  const img=new Sprite(getTexture('back1') as Texture<Resource>);
  img.width=this.app.view.width;
  img.height=this.app.view.height;
  return img;
       
}
    public update(delta:number):void {
      if (this.isInitialized && this.emitter) {
        this.emitter.update(delta);
      }
    }
}

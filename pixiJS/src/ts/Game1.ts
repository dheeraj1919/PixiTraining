
import {Text,Loader,Application, Container,Ticker,Graphics ,TextStyle,Texture,Sprite, Resource, Renderer} from 'pixi.js';
import {getTexture} from "./texture";
import {Loaderfile} from "./Loaderfile";
import assets from "./assest";
import { move } from './snack';
import {eat, food} from './snackfood';
import { show } from './snackfood';
export class Game {
    
     private stage: Container;
    private background:Container;
    private speed = 10;
    private xspeed=0;
    private yspeed=0;
    private head:any;
    private food:any;
    
    private app: Application;
    constructor(app:Application) {
        this.app = app;
        
        this.stage = app.stage;
        this.background = new Container();
        this.stage.addChild(this.background);
        //Loaderfile(assest,)
        Loaderfile(assets, () => {
            
            this.createSprite();
            this.createSnake();
           this.food= this.createFood();
          this.head=  this.createhead();
            
        });
      

    }
    public createhead()  {
        // const img=new Sprite(getTexture('head') as Texture<Resource>);
        // img.anchor.set(0.5);
        // img.scale.set(0.06);
        // img.position.set(this.app.view.width / 2-100, this.app.view.height /2);
      //  this.background.addChild(Graphics.drawRect(0, 0,15, 15));
        const img =show(this.background);
        window.onkeydown = (e) => {
            switch(e.code) {
              
              case 'ArrowLeft':
                  this.xspeed=-1;
                  this.yspeed=0;
                  break;
              case 'ArrowUp':
                this.xspeed=0;
                this.yspeed=-1;;
                  break;
              case 'ArrowRight':
                this.xspeed=1;
                this.yspeed=0;;
                  break;
              case 'ArrowDown':
                this.xspeed=0;
                this.yspeed=1;;
                  break;
          }
         
      }
       return this.background.addChild(img);
      
      
    }
    private createSnake(): void {
        const img=new Sprite(getTexture('dot') as Texture<Resource>);
        img.anchor.set(0.5);
        img.scale.set(0.009);
        img.position.set(this.app.view.width / 2-80, this.app.view.height/2);

        this.background.addChild(img);

    }
   private createFood() {
        const img1= new Sprite(getTexture('food') as Texture<Resource>);
        img1.anchor.set(0.5);
        img1.scale.set(0.08);
        img1.position.set(Math.random()*this.app.view.width / 2, Math.random()*this.app.view.height);
       // show(this.background);
       return this.background.addChild(img1);
    }
   private createSprite():void
    {
        const img=new Sprite(getTexture('back') as Texture<Resource>);
        img.anchor.set(0.5);
        img.position.set(0,0);
        img.width= this.app.view.width;
        img.height=this.app.view.width;
        this.background.addChild(img);
   }
    
    public update():void {
    if(this.head)
       {
        
       
        
        if(this.rectcolision(this.head,this.food))
        {
           
             this.food.visible=false;
             food(this.food,this.app,this.background);
            eat(this.head,this.xspeed,this.yspeed,this.background);
        }
           
         move(this.xspeed,this.yspeed,this.head, this.app.view.width,this.app.view.height,this.background);
          
       }
      
    }
    private rectcolision(img1:any, img2:any) {
         
        if(img1 && img2) {

           let bounds1=img1.position;
           let bounds2=img2.position;
           console.log( bounds2.x + img1.width );
          return  bounds1.x < bounds2.x + img2.width
            && bounds1.x + img1.width > bounds2.x
            && bounds1.y < bounds2.y + img2.height
            && bounds1.y + img1.height > bounds2.y;
           // return bounds1.x ==bounds2.x ;
          
        }
         
        
    }
}
import {Application,Container ,Rectangle,Graphics} from "pixi.js";
import vector from "./vector";
let scale=15;
let total=0;
//let total = 0;
let tail:any = [];
let food2:any;
export function food(food1:any, app:Application,background:Container)
{
    total++;
   // food2=food1;
   
   // console.log(app.view.width);
    food1.position.set(Math.random()*app.view.width / 2, Math.random()*app.view.height);
    background.addChild(food1);
    food1.visible = true;
    //new Scalable(scale,new vector(0,0),food1,background);
    
      
}
var graphics = new Graphics();
let x:number=0 ;
let y:number=0;
//let background1:Container;
export function eat(head:any,xspeed:number,yspeed:number,background:Container,app:Application){
    x=x+xspeed*20;
   y= y+yspeed*20;
   if(x<0 )
{
    x=0;
}
if(x>app.view.width)
{
    x=app.view.width-20;
}
if(y<0){
    y=0;
}
//console.log("back"+app.view.height);
if(y>app.view.height)
{
    y=background.height;
}
    
    for (let i = 0; i < tail.length - 1; i++) {
        tail[i] = tail[i + 1];
      }
      if (total >= 1) {
        tail[total - 1] =  new vector(x, y);
      }
      show(background);
    }
      

     
      
     
    export function  show (background:Container) {
        
        graphics.beginFill(0xFFFF00);
      
        // set the line style to have a width of 5 and set the color to red
        graphics.lineStyle(5, 0xFF0000);
       
        
           
        
        for (let i = 0; i < tail.length; i++) {
           // console.log("X:"+tail[i].x+"y:"+tail[i].y);
                graphics.drawRect(tail[i].x, tail[i].y, 15, 15);
              }
              
              graphics.drawRect(x,y , 15, 15);
            return graphics;
             //background.addChild(graphics);
      };
      


 import {Application,Container}  from "pixi.js"
 

 export function move(xspeed:number , yspeed:number,image:any,maxW:number,maxh:number,background:Container){
   // total++;
    
    
   
//     for (let i = 0; i < tail.length; i++) {
//       rect(tail[i].x, tail[i].y, 25, 25);
//     }
//     rect(this.x, this.y, scl, scl);
//   };
    image.position.x+=xspeed;
        image.position.y+=yspeed;
        
        
    if(image.position.x<0) {
        //console.log("pos"+image.position.x);
        image.position.x= maxW;
        //console.log("pos"+maxW);
    }

    if(image.position.y < 0) {
        image.position.y = maxh;
    }

    if(image.position.x > maxW/2) {
        image.position.x = 0;
    }

    if(image.position.y > maxh) {
        image.position.y = 0;
    }
  } 
  


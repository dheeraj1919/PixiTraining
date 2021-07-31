import {Application,Sprite,Ticker} from 'pixi.js';
import {Game} from "./ts/Game1";
onload=()=>{

    const app=new Application({

        width:800,
        height:600,
        backgroundColor:0xeeeeee,
        resizeTo:window,
        sharedTicker: true
    });

    document.body.appendChild(app.view);
    // const img= Sprite.from("./src/assests/img/car1.png");
    // img.width=400;
    // img.height=300;
    // app.stage.addChild(img);
    

    // app.ticker.add((delta) => {
    //     // just for fun, let's rotate mr rabbit a little
    //     // delta is 1 if running at 100% performance
    //     // creates frame-independent transformation
    //     img.rotation += 0.1 * delta;
    // });
    
   // document.body.appendChild(app.view);

    const game1 = new Game(app);
    const ticker = Ticker.shared;
    ticker.add(game1.update.bind(game1));
    
}
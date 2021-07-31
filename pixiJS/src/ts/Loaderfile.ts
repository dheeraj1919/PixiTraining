
import { Loader } from "pixi.js";
import {setResources} from "./texture";

function addloader(loader:Loader, assets: {key:string, url:string}[]):void {
    assets.forEach((asset) => {
      loader.add(asset);
     

    });
  }
function loadComplete (loader: Loader, functcall:()=>void) {

    setResources(loader.resources);
 
 functcall();

}
export function Loaderfile(imagelist:any, functcall:()=>void)
{
        const loader= Loader.shared;
            if(imagelist.baseUrl)
            {
                loader.baseUrl=imagelist.baseUrl;
            }
         addloader(loader,imagelist.images);

         
         loader.onComplete.add((l:Loader) => {
            loadComplete(l, functcall);
          });
         
          loader.load();
          
         // return loader;

}